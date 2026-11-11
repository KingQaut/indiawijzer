// Calculates the dates of Indian festivals and of Dutch and Indian public
// holidays for any year, so nobody has to type them in each year.
//
// Hindu, Sikh and Jain festivals follow the moon. This file works out where the
// sun and moon are (formulas from Jean Meeus, "Astronomical Algorithms") and
// applies the usual calendar rule for each festival, for Indian Standard Time.
// Local tradition can differ by a day; the page says so.
//
// Nothing here needs maintenance: no tables of dates, no outside data.

const RAD = Math.PI / 180;
const norm = (d) => ((d % 360) + 360) % 360;
const sin = (d) => Math.sin(d * RAD);
const DAY = 86400000;
const IST = 5.5 * 3600000;

// Julian centuries since 2000, with ~70 s added to turn clock time into the
// uniform time the formulas expect.
const century = (ms) => ((ms + 70000) / DAY + 2440587.5 - 2451545) / 36525;

export function sunLongitude(ms) {
  const T = century(ms);
  const L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
  const M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
  const C = (1.914602 - 0.004817 * T) * sin(M) + (0.019993 - 0.000101 * T) * sin(2 * M) + 0.000289 * sin(3 * M);
  return norm(L0 + C - 0.00569 - 0.00478 * sin(125.04 - 1934.136 * T));
}

// [D, M, M', F, coefficient in millionths of a degree]
const MOON = [
  [0, 0, 1, 0, 6288774], [2, 0, -1, 0, 1274027], [2, 0, 0, 0, 658314], [0, 0, 2, 0, 213618], [0, 1, 0, 0, -185116],
  [0, 0, 0, 2, -114332], [2, 0, -2, 0, 58793], [2, -1, -1, 0, 57066], [2, 0, 1, 0, 53322], [2, -1, 0, 0, 45758],
  [0, 1, -1, 0, -40923], [1, 0, 0, 0, -34720], [0, 1, 1, 0, -30383], [2, 0, 0, -2, 15327], [0, 0, 1, 2, -12528],
  [0, 0, 1, -2, 10980], [4, 0, -1, 0, 10675], [0, 0, 3, 0, 10034], [4, 0, -2, 0, 8548], [2, 1, -1, 0, -7888],
  [2, 1, 0, 0, -6766], [1, 0, -1, 0, -5163], [1, 1, 0, 0, 4987], [2, -1, 1, 0, 4036], [2, 0, 2, 0, 3994],
  [4, 0, 0, 0, 3861], [2, 0, -3, 0, 3665], [0, 1, -2, 0, -2689], [2, 0, -1, 2, -2602], [2, -1, -2, 0, 2390],
  [1, 0, 1, 0, -2348], [2, -2, 0, 0, 2236], [0, 1, 2, 0, -2120], [0, 2, 0, 0, -2069], [2, -2, -1, 0, 2048],
  [2, 0, 1, -2, -1773], [2, 0, 0, 2, -1595], [4, -1, -1, 0, 1215], [0, 0, 2, 2, -1110],
];

export function moonLongitude(ms) {
  const T = century(ms);
  const L = 218.3164477 + 481267.88123421 * T - 0.0015786 * T * T;
  const D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T;
  const M = 357.5291092 + 35999.0502909 * T;
  const Mp = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T;
  const F = 93.272095 + 483202.0175233 * T - 0.0036539 * T * T;
  const E = 1 - 0.002516 * T;
  let sum = 0;
  for (const [d, m, mp, f, c] of MOON) sum += c * (m ? (Math.abs(m) === 2 ? E * E : E) : 1) * sin(d * D + m * M + mp * Mp + f * F);
  // small extra terms (Venus, Jupiter, flattening) and nutation
  sum += 3958 * sin(119.75 + 131.849 * T) + 1962 * sin(L - F) + 318 * sin(53.09 + 479264.29 * T);
  return norm(L + sum / 1e6 - 0.00478 * sin(125.04 - 1934.136 * T));
}

// The Indian calendar measures against the stars (Lahiri ayanamsa).
const ayanamsa = (ms) => 23.85306 + 0.0139689 * century(ms) * 100;
const siderealSun = (ms) => norm(sunLongitude(ms) - ayanamsa(ms));
const siderealMoon = (ms) => norm(moonLongitude(ms) - ayanamsa(ms));
const elongation = (ms) => norm(moonLongitude(ms) - sunLongitude(ms));
// Tithi: lunar day, 1–30. 1–15 waxing (15 = full moon), 16–30 waning (30 = new moon).
export const tithi = (ms) => Math.floor(elongation(ms) / 12) + 1;

// Finds the moment between a and b where the angle f(t) passes `target`.
function crossing(f, target, a, b) {
  const g = (t) => ((f(t) - target + 540) % 360) - 180;
  for (let i = 0; i < 40; i++) {
    const m = (a + b) / 2;
    if (g(a) <= 0 === g(m) <= 0) a = m; else b = m;
  }
  return (a + b) / 2;
}

function newMoons(from, to) {
  const out = [];
  for (let t = from; t < to; t += DAY) {
    if (elongation(t) > 300 && elongation(t + DAY) < 60) out.push(crossing(elongation, 0, t, t + DAY));
  }
  return out;
}

// Moment the sun enters a point on the star-based zodiac, in a given year.
function sunEnters(deg, year, monthGuess) {
  const start = Date.UTC(year, monthGuess, 1);
  for (let t = start; t < start + 62 * DAY; t += DAY) {
    const a = norm(siderealSun(t) - deg), b = norm(siderealSun(t + DAY) - deg);
    if (a > 300 && b < 60) return crossing(siderealSun, deg, t, t + DAY);
  }
  return null;
}

// Dates are handled as "IST calendar days": UTC-midnight timestamps whose
// Y-M-D is the date in India.
const istDay = (ms) => Math.floor((ms + IST) / DAY) * DAY;
const at = (day, hour) => day - IST + hour * 3600000; // the real moment of `hour` o'clock IST on that day
const iso = (day) => new Date(day).toISOString().slice(0, 10);

// Lunar months of one year. Month 0 = Chaitra … 11 = Phalguna, named after the
// sun's sign at the new moon that starts it; a repeated name marks a leap month.
function lunarMonths(year) {
  const nm = newMoons(Date.UTC(year - 1, 11, 1), Date.UTC(year + 1, 1, 15));
  const months = [];
  for (let i = 0; i < nm.length - 1; i++) {
    const sign = Math.floor(siderealSun(nm[i]) / 30);
    const nextSign = Math.floor(siderealSun(nm[i + 1]) / 30);
    months.push({ start: nm[i], end: nm[i + 1], month: (sign + 1) % 12, leap: sign === nextSign });
  }
  return months.filter((m) => !m.leap && new Date(m.start + 20 * DAY).getUTCFullYear() === year);
}

// The day on which lunar day `t` of `month` is running at `hour` (IST).
function tithiDay(months, month, t, hour) {
  const m = months.find((x) => x.month === month);
  if (!m) return null;
  const first = istDay(m.start) - DAY, last = istDay(m.end) + DAY;
  for (let d = first; d <= last; d += DAY) {
    const now = at(d, hour);
    if (now > m.start - DAY && now < m.end + DAY && tithi(now) === t && Math.abs(now - (m.start + (t - 0.5) * 0.984 * DAY)) < 4 * DAY) return d;
  }
  // The lunar day was too short to cover that hour on any day: take the day it starts.
  const target = (t - 1) * 12;
  for (let x = m.start - DAY; x < m.end + DAY; x += DAY / 4) {
    const a = norm(elongation(x) - target), b = norm(elongation(x + DAY / 4) - target);
    if (a > 300 && b < 60) return istDay(crossing(elongation, target, x, x + DAY / 4));
  }
  return null;
}

// Start and end of the lunar day running at a given moment.
function tithiSpan(ms) {
  const t = tithi(ms);
  const find = (target, dir) => {
    for (let x = ms; Math.abs(x - ms) < 2 * DAY; x += dir * 3600000) {
      const lo = Math.min(x, x + dir * 3600000), hi = Math.max(x, x + dir * 3600000);
      const a = norm(elongation(lo) - target), b = norm(elongation(hi) - target);
      if (a > 300 && b < 60) return crossing(elongation, target, lo, hi);
    }
    return ms;
  };
  return [find((t - 1) * 12, -1), find((t % 30) * 12, 1)];
}

const [CHAITRA, VAISHAKHA, , ASHADHA, SHRAVANA, BHADRAPADA, ASHWIN, KARTIK, , , MAGHA, PHALGUNA] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const SUNRISE = 6.25, NOON = 12.5, AFTERNOON = 15, DUSK = 18.5, MIDNIGHT = 24;

// Festivals that follow the moon: [key, month, lunar day, hour of day that decides]
const LUNAR = [
  ["vasant", MAGHA, 5, SUNRISE],
  ["shivaratri", MAGHA, 29, MIDNIGHT],
  ["ugadi", CHAITRA, 1, SUNRISE],
  ["ramnavami", CHAITRA, 9, NOON],
  ["mahavir", CHAITRA, 13, SUNRISE],
  ["buddha", VAISHAKHA, 15, SUNRISE],
  ["rathyatra", ASHADHA, 2, SUNRISE],
  ["rakhi", SHRAVANA, 15, SUNRISE],
  ["janmashtami", SHRAVANA, 23, MIDNIGHT],
  ["ganesh", BHADRAPADA, 4, NOON],
  ["navratri", ASHWIN, 1, SUNRISE],
  ["dussehra", ASHWIN, 10, AFTERNOON],
  ["diwali", ASHWIN, 30, DUSK],
  ["bhaidooj", KARTIK, 2, AFTERNOON],
  ["chhath", KARTIK, 6, DUSK],
  ["gurunanak", KARTIK, 15, SUNRISE],
];

function easter(y) { // Gregorian Easter Sunday
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4;
  const f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31), day = ((h + l - 7 * m + 114) % 31) + 1;
  return Date.UTC(y, month - 1, day);
}

// Everything for one year: [{ date: "YYYY-MM-DD", key, kind }], sorted.
// kind: "festival" | "in" (Indian national holiday) | "nl" (Dutch public holiday)
export function yearCalendar(year) {
  const out = [];
  const add = (day, key, kind = "festival") => { if (day != null) out.push({ date: iso(day), key, kind }); };
  const months = lunarMonths(year);

  for (const [key, month, t, hour] of LUNAR) add(tithiDay(months, month, t, hour), key);

  // Holi: bonfire on the full-moon evening of Phalguna, colours the next day.
  // The bonfire avoids the first half of the lunar day; if that half runs past
  // midnight, everything moves up a day.
  let bonfire = tithiDay(months, PHALGUNA, 15, DUSK);
  if (bonfire != null) {
    const [s, e] = tithiSpan(at(bonfire, DUSK));
    if (s + (e - s) / 2 > at(bonfire, MIDNIGHT)) bonfire += DAY;
    add(bonfire + DAY, "holi");
  }

  // Festivals that follow the sun.
  const makar = sunEnters(270, year, 0), mesha = sunEnters(0, year, 3);
  if (makar) add(istDay(makar), "sankranti");
  if (mesha) add(istDay(mesha), "vaisakhi");

  // Onam: the moon in the star Shravana (Thiruvonam) while the sun is in Leo.
  let onam = null;
  for (let d = Date.UTC(year, 7, 10); d < Date.UTC(year, 8, 25); d += DAY) {
    const t = at(d, SUNRISE);
    if (Math.floor(siderealSun(t) / 30) === 4 && Math.floor(siderealMoon(t) / (360 / 27)) === 21) onam = d;
  }
  add(onam, "onam");

  // Fixed Indian national holidays.
  add(Date.UTC(year, 0, 26), "republic", "in");
  add(Date.UTC(year, 7, 15), "independence", "in");
  add(Date.UTC(year, 9, 2), "gandhi", "in");

  // Dutch public holidays.
  const e = easter(year);
  const king = new Date(Date.UTC(year, 3, 27)).getUTCDay() === 0 ? Date.UTC(year, 3, 26) : Date.UTC(year, 3, 27);
  add(Date.UTC(year, 0, 1), "newyear", "nl");
  add(e - 2 * DAY, "goodfriday", "nl");
  add(e, "easter", "nl");
  add(e + DAY, "eastermonday", "nl");
  add(king, "kingsday", "nl");
  add(Date.UTC(year, 4, 5), "liberation", "nl");
  add(e + 39 * DAY, "ascension", "nl");
  add(e + 49 * DAY, "pentecost", "nl");
  add(e + 50 * DAY, "pentecostmonday", "nl");
  add(Date.UTC(year, 11, 25), "christmas", "nl");
  add(Date.UTC(year, 11, 26), "christmas2", "nl");

  return out.sort((a, b) => a.date.localeCompare(b.date));
}

export const _test = { newMoons, sunEnters, elongation, crossing };
