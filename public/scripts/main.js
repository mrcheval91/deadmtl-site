// DeadMTL Network Terminal — main.js
// Progressive enhancement only. No external dependencies.

(function () {
  'use strict';

  // ─── Network bar mobile toggle ────────────────────────────────────────────
  var toggle = document.querySelector('.nb__toggle');
  var menu   = document.getElementById('nb-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open', !expanded);
    });

    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      }
    });
  }

  // ─── Legacy site-nav toggle (inner pages) ────────────────────────────────
  var legacyToggle = document.querySelector('.nav-toggle');
  var legacyMenu   = document.querySelector('.nav-links');

  if (legacyToggle && legacyMenu) {
    legacyToggle.addEventListener('click', function () {
      var expanded = legacyToggle.getAttribute('aria-expanded') === 'true';
      legacyToggle.setAttribute('aria-expanded', String(!expanded));
      legacyMenu.classList.toggle('is-open', !expanded);
    });

    document.addEventListener('click', function (e) {
      if (!legacyToggle.contains(e.target) && !legacyMenu.contains(e.target)) {
        legacyToggle.setAttribute('aria-expanded', 'false');
        legacyMenu.classList.remove('is-open');
      }
    });
  }

  // ─── Terminal clock ───────────────────────────────────────────────────────
  var clockEl = document.getElementById('site-clock');
  if (clockEl) {
    function updateClock() {
      var now = new Date();
      var h = String(now.getHours()).padStart(2, '0');
      var m = String(now.getMinutes()).padStart(2, '0');
      var s = String(now.getSeconds()).padStart(2, '0');
      clockEl.textContent = h + ':' + m + ':' + s;
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  // ─── Ticker rotation ─────────────────────────────────────────────────────
  var tickerEl = document.getElementById('ticker-msg');
  if (tickerEl) {
    var messages = [
      'SEASON 0 SETUP ▸ WHITELIST CLOSED ▸ MAP NODE LASALLE ACTIVE ▸ SERVER PENDING',
      'SAINT-PAUL-EMARD ENCLAVE ▸ SECTOR 01 ▸ CANAL EDGE ROUTE ACTIVE ▸ GATE B UNSTABLE',
      'DISPATCH CHANNEL ONLINE ▸ 3 TRANSMISSIONS ON RECORD ▸ SIGNAL MONK ▸ CANAL CACHE ▸ LASALLE PRESSURE',
      'NO PAY-TO-WIN ▸ NO DONOR PERKS ▸ EQUAL FOOTING OR NO SERVER ▸ RULES APPLY TO ALL',
      'MONTREAL SURVIVAL NETWORK ▸ INDEPENDENT PROJECT ▸ NOT AFFILIATED WITH THE INDIE STONE',
    ];
    var idx = 0;
    var INTERVAL = 6000;

    function rotateTicker() {
      tickerEl.classList.add('is-hidden');
      setTimeout(function () {
        idx = (idx + 1) % messages.length;
        tickerEl.textContent = messages[idx];
        tickerEl.classList.remove('is-hidden');
      }, 380);
    }

    setInterval(rotateTicker, INTERVAL);
  }

  // ─── Snow effect (legacy — kept for inner pages that use .snow-layer) ────
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    var snowLayer = document.querySelector('.snow-layer');
    if (snowLayer) {
      for (var i = 0; i < 25; i++) {
        var flake = document.createElement('span');
        flake.className = 'snow-flake';
        flake.setAttribute('aria-hidden', 'true');
        var size = Math.random() * 2 + 1.5;
        flake.style.cssText = [
          'left:'               + (Math.random() * 100) + '%',
          'animation-delay:'   + (Math.random() * 10)  + 's',
          'animation-duration:' + (8 + Math.random() * 10) + 's',
          'opacity:'            + (0.06 + Math.random() * 0.25),
          'width:'              + size + 'px',
          'height:'             + size + 'px',
        ].join(';');
        snowLayer.appendChild(flake);
      }
    }
  }

}());
