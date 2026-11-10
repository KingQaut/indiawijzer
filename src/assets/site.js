// Site search and list filter. No libraries, no tracking.
(function () {
  var norm = function (s) {
    return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  };

  // ── Search box in the header ────────────────────────────────────────────
  var q = document.getElementById("q");
  var hits = document.getElementById("hits");
  var src = document.getElementById("search-index");
  var index = null;

  function load() {
    if (index || !src) return;
    index = [];
    fetch(src.href).then(function (r) { return r.json(); }).then(function (d) {
      index = d.map(function (x) { x.s = norm(x.t + " " + (x.d || "") + " " + (x.k || "")); x.h = norm(x.t); return x; });
      run();
    }).catch(function () {});
  }

  function run() {
    var words = norm(q.value).split(/\s+/).filter(Boolean);
    hits.textContent = "";
    if (!words.length || !index) { hits.hidden = true; return; }
    var found = index.filter(function (x) {
      return words.every(function (w) { return x.s.indexOf(w) > -1; });
    }).sort(function (a, b) {
      // own pages before external links, title matches before body matches
      var score = function (x) { return (x.x ? 2 : 0) + (x.h.indexOf(words[0]) > -1 ? 0 : 1); };
      return score(a) - score(b);
    }).slice(0, 12);

    if (!found.length) {
      var li = document.createElement("li");
      li.className = "none";
      li.textContent = q.dataset.empty;
      hits.appendChild(li);
    }
    found.forEach(function (x) {
      var li = document.createElement("li"), a = document.createElement("a"), sm = document.createElement("small");
      a.href = x.x ? x.u : new URL(x.u.replace(/^\//, ""), new URL("..", src.href)).href;
      a.textContent = x.t + (x.x ? " ↗" : "");
      sm.textContent = x.d || "";
      a.appendChild(sm); li.appendChild(a); hits.appendChild(li);
    });
    hits.hidden = false;
  }

  if (q) {
    q.addEventListener("focus", load);
    q.addEventListener("input", function () { load(); run(); });
    q.addEventListener("keydown", function (e) { if (e.key === "Escape") { q.value = ""; run(); } });
    document.addEventListener("click", function (e) { if (!e.target.closest(".search")) hits.hidden = true; });
  }

  // ── Filter for restaurant / temple lists ────────────────────────────────
  var fq = document.getElementById("finder-q");
  var list = document.getElementById("finder-list");
  var count = document.getElementById("finder-n");
  if (fq && list) {
    var rows = Array.prototype.slice.call(list.children);
    rows.forEach(function (li) { li._s = norm(li.dataset.s); });
    fq.addEventListener("input", function () {
      var words = norm(fq.value).split(/\s+/).filter(Boolean), n = 0;
      rows.forEach(function (li) {
        var ok = words.every(function (w) { return li._s.indexOf(w) > -1; });
        li.hidden = !ok;
        if (ok) n++;
      });
      count.textContent = n;
    });
  }
})();
