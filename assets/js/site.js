(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Mobile menu: full height panel, links arrive one after another */
  var btn = document.querySelector(".menu-btn");
  var panel = document.getElementById("menu-panel");
  if (btn && panel) {
    var closeMenu = function (returnFocus) {
      btn.setAttribute("aria-expanded", "false");
      panel.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      setTimeout(function () { if (btn.getAttribute("aria-expanded") === "false") panel.hidden = true; }, 300);
      if (returnFocus) btn.focus();
    };
    var openMenu = function () {
      panel.hidden = false;
      btn.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { panel.classList.add("is-open"); });
      });
      var first = panel.querySelector("a");
      if (first) first.focus({ preventScroll: true });
    };
    btn.addEventListener("click", function () {
      if (btn.getAttribute("aria-expanded") === "true") closeMenu(false); else openMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") closeMenu(true);
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu(false);
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function (m) {
      if (m.matches) closeMenu(false);
    });
  }

  /* Scroll reveals: only for sections that start below the fold, once each */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (reveals.length && "IntersectionObserver" in window && !reduce) {
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          entry.target.classList.remove("pre");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) {
      if (el.getBoundingClientRect().top > vh * 0.92) {
        el.classList.add("pre");
        io.observe(el);
      }
    });
  }

  /* Tagline: each word moves from muted to full as it crosses a line on screen */
  var tagline = document.querySelector("[data-tagline]");
  if (tagline && !reduce) {
    var isZh = (document.documentElement.lang || "").toLowerCase().indexOf("zh") === 0;
    var raw = tagline.textContent.trim();
    var text = isZh ? Array.from(raw) : raw.split(/\s+/);
    var step = isZh ? 2 : 6;
    tagline.textContent = "";
    var words = text.map(function (w, i) {
      var span = document.createElement("span");
      span.className = "w";
      span.textContent = w;
      tagline.appendChild(span);
      if (!isZh && i < text.length - 1) tagline.appendChild(document.createTextNode(" "));
      return span;
    });
    var ticking = false;
    var update = function () {
      ticking = false;
      var line = window.innerHeight * 0.72;
      words.forEach(function (w, i) {
        var r = w.getBoundingClientRect();
        var on = r.top + r.height / 2 < line - i * step;
        w.classList.toggle("on", on);
      });
    };
    var onScroll = function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* Publication filter by research area */
  var filterBar = document.querySelector("[data-filter]");
  if (filterBar) {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-area]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll("[data-group]"));
    var status = document.querySelector("[data-filter-status]");
    filterBar.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip");
      if (!chip) return;
      var area = chip.getAttribute("data-value");
      Array.prototype.forEach.call(filterBar.querySelectorAll(".chip"), function (c) {
        c.setAttribute("aria-pressed", c === chip ? "true" : "false");
      });
      var shown = 0;
      items.forEach(function (it) {
        var match = area === "all" || it.getAttribute("data-area") === area;
        it.classList.toggle("is-hidden", !match);
        if (match) shown++;
      });
      groups.forEach(function (g) {
        var visible = g.querySelectorAll("[data-area]:not(.is-hidden)").length;
        g.hidden = visible === 0;
        var count = g.querySelector("[data-count]");
        if (count) count.textContent = visible;
      });
      if (status) status.textContent = (status.getAttribute("data-template") || "%n items shown").replace("%n", shown);
    });
  }
})();
