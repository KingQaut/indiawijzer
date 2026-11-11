// Scripts for the self-updating pages: festival calendar, "now" and "near me".
// No tracking. Location and calculations stay in the visitor's browser.
(function () {
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  var norm = function (s) { return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim(); };
  var data = function (node, key) { try { return JSON.parse(node.dataset[key]); } catch (e) { return {}; } };

  // ── Calendar: "in 12 days" and hiding days that have passed ─────────────
  var up = $("upcoming");
  if (up) {
    var cui = data(up, "ui"), now0 = new Date();
    var today = Date.UTC(now0.getFullYear(), now0.getMonth(), now0.getDate());
    Array.prototype.forEach.call(up.children, function (li) {
      var n = Math.round((Date.parse(li.dataset.date + "T00:00:00Z") - today) / 864e5);
      if (n < 0) { li.hidden = true; return; }
      var t = n === 0 ? cui.today : n === 1 ? cui.tomorrow : cui.inDays.replace("{n}", n);
      li.querySelector("time").appendChild(el("em", n < 2 ? "soon" : "", t));
    });
  }

  // ── Now: clocks, calling hours, weather, exchange rate ──────────────────
  var nowBox = $("now");
  if (nowBox) {
    var ui = data(nowBox, "ui"), lang = nowBox.dataset.lang === "nl" ? "nl-NL" : "en-GB";
    var parts = function (zone, d) {
      var o = {};
      new Intl.DateTimeFormat("en-GB", { timeZone: zone, hour: "2-digit", minute: "2-digit", hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit" })
        .formatToParts(d).forEach(function (p) { o[p.type] = +p.value; });
      return o;
    };
    var minutesAhead = function (d) { // how far India is ahead of the Netherlands
      var a = parts("Europe/Amsterdam", d), b = parts("Asia/Kolkata", d);
      return (Date.UTC(b.year, b.month - 1, b.day, b.hour, b.minute) - Date.UTC(a.year, a.month - 1, a.day, a.hour, a.minute)) / 6e4;
    };
    var okHour = function (h) { return h >= 8 && h < 22; };
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var lastKey = "";

    var tick = function () {
      var d = new Date();
      var fmt = function (zone, opts) { opts.timeZone = zone; return new Intl.DateTimeFormat(lang, opts).format(d); };
      $("clock-nl").textContent = fmt("Europe/Amsterdam", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
      $("clock-in").textContent = fmt("Asia/Kolkata", { hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
      $("date-nl").textContent = fmt("Europe/Amsterdam", { weekday: "long", day: "numeric", month: "long" });
      $("date-in").textContent = fmt("Asia/Kolkata", { weekday: "long", day: "numeric", month: "long" });

      var ahead = minutesAhead(d), a = parts("Europe/Amsterdam", d), b = parts("Asia/Kolkata", d);
      var key = ahead + "|" + a.hour;
      if (key === lastKey) return;
      lastKey = key;
      $("now-diff").textContent = ui.diff.replace("{h}", (ahead / 60).toLocaleString(lang));
      var good = okHour(a.hour) && okHour(b.hour);
      var call = $("now-call");
      call.textContent = (good ? "✅ " : "🌙 ") + (good ? ui.good : ui.bad);
      call.className = "callnow " + (good ? "ok" : "no");

      var table = $("now-hours"), r1 = el("tr"), r2 = el("tr");
      table.textContent = "";
      r1.appendChild(el("th", "", table.dataset.nl)); r2.appendChild(el("th", "", table.dataset.in));
      for (var h = 0; h < 24; h++) {
        var m = h * 60 + ahead, ih = Math.floor(((m % 1440) + 1440) % 1440 / 60), im = ((m % 60) + 60) % 60;
        var cls = (okHour(h) && okHour(ih + im / 60) && ih + im / 60 < 22 ? "ok" : "") + (h === a.hour ? " cur" : "");
        r1.appendChild(el("td", cls, pad(h) + ":00"));
        r2.appendChild(el("td", cls, pad(ih) + ":" + pad(im)));
      }
      table.appendChild(r1); table.appendChild(r2);
      var cur = table.querySelector(".cur");
      if (cur && cur.scrollIntoView) cur.parentNode.parentNode.parentNode.scrollLeft = Math.max(0, cur.offsetLeft - 120);
    };
    tick();
    setInterval(tick, 5000);

    // Weather and air quality, straight from Open-Meteo (free, no key).
    var cities = data(nowBox, "cities"), wbox = $("now-weather");
    if (cities.length && window.fetch) {
      var lat = cities.map(function (c) { return c.y; }).join(","), lon = cities.map(function (c) { return c.x; }).join(",");
      var get = function (u) { return fetch(u).then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (j) { return Array.isArray(j) ? j : [j]; }); };
      var wxName = function (c) {
        return c <= 1 ? ["☀️", "clear"] : c <= 3 ? ["⛅", "cloudy"] : c <= 48 ? ["🌫️", "fog"] : c <= 57 ? ["🌦️", "drizzle"] : c <= 67 ? ["🌧️", "rain"]
          : c <= 77 ? ["❄️", "snow"] : c <= 82 ? ["🌧️", "showers"] : c <= 86 ? ["❄️", "snow"] : ["⛈️", "thunder"];
      };
      Promise.all([
        get("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current=temperature_2m,weather_code"),
        get("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=" + lat + "&longitude=" + lon + "&current=european_aqi,pm2_5").catch(function () { return []; }),
      ]).then(function (res) {
        wbox.textContent = "";
        cities.forEach(function (c, i) {
          var w = res[0][i] && res[0][i].current, q = res[1][i] && res[1][i].current;
          if (!w) return;
          var card = el("div", "wx"), x = wxName(w.weather_code);
          card.appendChild(el("small", "", c.n));
          card.appendChild(el("b", "", x[0] + " " + Math.round(w.temperature_2m) + "°C"));
          card.appendChild(el("span", "", ui.wx[x[1]]));
          if (q && q.european_aqi != null) {
            var band = Math.min(5, Math.floor(q.european_aqi / 20));
            var air = el("span", "air a" + band, ui.airLabel + ": " + ui.air[band]);
            if (q.pm2_5 != null) air.title = "PM2.5: " + Math.round(q.pm2_5) + " µg/m³";
            card.appendChild(air);
          }
          wbox.appendChild(card);
        });
        if (!wbox.children.length) throw 0;
      }).catch(function () { wbox.textContent = ""; wbox.appendChild(el("p", "meta", ui.fail)); });
    }

    // Euro ⇄ rupee
    var rate = +nowBox.dataset.rate, eur = $("rate-eur"), inr = $("rate-inr");
    if (rate && eur && inr) {
      var round = function (v, n) { return isFinite(v) ? String(Math.round(v * n) / n) : ""; };
      eur.addEventListener("input", function () { inr.value = round(eur.value * rate, 1); });
      inr.addEventListener("input", function () { eur.value = round(inr.value / rate, 100); });
      inr.value = round(eur.value * rate, 1);
    }
  }

  // ── Near me ─────────────────────────────────────────────────────────────
  var near = $("near");
  if (near) {
    var nui = data(near, "ui"), kinds = data(near, "kinds");
    var q = $("near-q"), radius = $("near-r"), out = $("near-out"), msg = $("near-msg"), mapBox = $("near-map");
    var places = null, towns = [], origin = null, map = null, layer = null, L = null;
    var km = function (a, b) {
      var r = Math.PI / 180, dy = (a.y - b.y) * r, dx = (a.x - b.x) * r * Math.cos((a.y + b.y) / 2 * r);
      return 6371 * Math.sqrt(dx * dx + dy * dy);
    };
    var say = function (t) { msg.textContent = t || ""; msg.hidden = !t; };
    var href = function (id) { return $(id).href; };

    var loadMap = function (done) {
      if (L) return done();
      var s = document.createElement("script");
      s.src = href("near-leaflet");
      s.onload = function () {
        L = window.L;
        mapBox.hidden = false;
        map = L.map(mapBox, { scrollWheelZoom: false }).setView([52.2, 5.3], 7);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
        layer = L.layerGroup().addTo(map);
        done();
      };
      s.onerror = function () { L = null; done(); };
      document.head.appendChild(s);
    };

    var show = function () {
      if (!places || !origin) return;
      var r = +radius.value, total = 0, pins = [];
      var on = {};
      Array.prototype.forEach.call(near.querySelectorAll(".near-kinds input"), function (c) { on[c.value] = c.checked; });
      out.textContent = "";
      kinds.forEach(function (k) {
        if (!on[k.key]) return;
        var found = (places[k.key] || []).map(function (p) {
          if (p.y != null) { var d = km(origin, p); return d <= r ? { p: p, d: d } : null; }
          return origin.n && norm(p.c) === norm(origin.n) ? { p: p, d: null } : null; // no coordinates yet: match on town name
        }).filter(Boolean).sort(function (a, b) { return (a.d == null ? 1e9 : a.d) - (b.d == null ? 1e9 : b.d); });
        if (!found.length) return;
        total += found.length;
        var h = el("h2", "", k.icon + " " + k.label + " "); h.appendChild(el("small", "", "(" + found.length + ")"));
        out.appendChild(h);
        var ul = el("ul", "places");
        found.slice(0, 60).forEach(function (f) {
          var p = f.p, li = el("li");
          li.appendChild(el("b", "", p.n));
          li.appendChild(el("span", "", [f.d != null ? (f.d < 10 ? f.d.toFixed(1) : Math.round(f.d)) + " km" : "", p.c, p.a].filter(Boolean).join(" · ")));
          var acts = el("span", "acts");
          if (p.w) { var w = el("a", "", nui.website); w.href = p.w; w.rel = "noopener nofollow"; acts.appendChild(w); }
          var m = el("a", "", nui.map); m.href = "https://www.openstreetmap.org/" + p.o; m.rel = "noopener"; acts.appendChild(m);
          li.appendChild(acts); ul.appendChild(li);
          if (p.y != null) pins.push({ p: p, k: k });
        });
        out.appendChild(ul);
      });
      say(total ? "" : nui.none);

      loadMap(function () {
        if (!L) return;
        layer.clearLayers();
        L.circle([origin.y, origin.x], { radius: r * 1000, color: "#888", weight: 1, fillOpacity: 0.04 }).addTo(layer);
        pins.forEach(function (x) {
          var a = document.createElement("div");
          a.appendChild(el("b", "", x.p.n)); a.appendChild(document.createElement("br")); a.appendChild(document.createTextNode(x.k.label));
          L.circleMarker([x.p.y, x.p.x], { radius: 7, color: "#fff", weight: 1.5, fillColor: x.k.color, fillOpacity: 0.95 }).bindPopup(a).addTo(layer);
        });
        map.invalidateSize();
        var dy = r / 111, dx = r / (111 * Math.cos(origin.y * Math.PI / 180));
        map.fitBounds([[origin.y - dy, origin.x - dx], [origin.y + dy, origin.x + dx]]);
      });
    };

    var pickTown = function (quiet) {
      var want = norm(q.value);
      if (!want) return;
      var hit = towns.filter(function (t) { return t.k === want; })[0];
      if (!hit) { var starts = towns.filter(function (t) { return t.k.indexOf(want) === 0; }); if (starts.length === 1 || (starts.length && !quiet)) hit = starts.sort(function (a, b) { return b.p - a.p; })[0]; }
      if (!hit) { if (!quiet) { out.textContent = ""; say(nui.unknown); } return; }
      origin = { y: hit.y, x: hit.x, n: hit.n };
      show();
    };

    Promise.all([fetch(href("near-places")).then(function (r) { return r.json(); }), fetch(href("near-towns")).then(function (r) { return r.json(); })]).then(function (res) {
      places = res[0];
      // Towns from the list, plus towns that only occur in the place lists.
      var seen = {};
      towns = res[1].map(function (t) { t.k = norm(t.n); seen[t.k] = 1; return t; });
      kinds.forEach(function (k) {
        var sum = {};
        (places[k.key] || []).forEach(function (p) { if (p.c && p.y != null && !seen[norm(p.c)]) { var s = sum[p.c] || (sum[p.c] = { y: 0, x: 0, c: 0 }); s.y += p.y; s.x += p.x; s.c++; } });
        Object.keys(sum).forEach(function (n) { seen[norm(n)] = 1; towns.push({ n: n, k: norm(n), y: sum[n].y / sum[n].c, x: sum[n].x / sum[n].c, p: 0 }); });
      });
      var list = $("near-list");
      towns.forEach(function (t) { var o = document.createElement("option"); o.value = t.n; list.appendChild(o); });
      var start = new URLSearchParams(location.search).get("q");
      if (start) { q.value = start; pickTown(false); }
    }).catch(function () { say(nui.none); });

    q.addEventListener("change", function () { pickTown(false); });
    q.addEventListener("input", function () { pickTown(true); });
    q.addEventListener("keydown", function (e) { if (e.key === "Enter") pickTown(false); });
    radius.addEventListener("change", show);
    near.querySelector(".near-kinds").addEventListener("change", show);
    $("near-me").addEventListener("click", function () {
      if (!navigator.geolocation) return say(nui.denied);
      navigator.geolocation.getCurrentPosition(function (pos) {
        q.value = "";
        origin = { y: pos.coords.latitude, x: pos.coords.longitude, n: "" };
        show();
      }, function () { say(nui.denied); }, { maximumAge: 600000, timeout: 15000 });
    });
  }
})();
