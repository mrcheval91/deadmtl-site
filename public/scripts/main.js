// DeadMTL Network Terminal — main.js
// BBS pirate municipal. Terminal contaminé. Réseau survivant.
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

  // ─── Terminal clock (24h military) ───────────────────────────────────────
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

  // ─── Ticker rotation — bilingual, Montreal-grounded ──────────────────────
  var tickerEl = document.getElementById('ticker-msg');
  if (tickerEl) {
    var messages = [
      'SAISON 0 EN COURS ▸ LISTE BLANCHE FERMÉE ▸ SERVEUR EN ATTENTE ▸ SIGNAL SITE ACTIF',
      'SAINT-PAUL-ÉMARD ▸ SECTEUR 01 ▸ CANAL ACTIF ▸ PORTE B INSTABLE ▸ LASALLE EN PRESSION',
      'BBS MUNICIPAL PIRATE ▸ RÉSEAU SURVIVANT ▸ TERMINAL CONTAMINÉ ▸ ARCHIVES DE QUARTIER',
      'AUCUN PAY-TO-WIN ▸ AUCUN AVANTAGE DONATEUR ▸ ACCÈS ÉGAL ▸ RÈGLES POUR TOUS',
      'MONTRÉAL HIVER 1993-94 ▸ L’ÉVÉNEMENT KNOX ▸ LA VILLE A ÉCHOUÉ PAR SECTEURS',
      'SIGNAL LOCAL SEULEMENT ▸ SECTEUR SOUS OBSERVATION ▸ ACCÈS: RESTREINT',
      'PROJET INDÉPENDANT ▸ NON AFFILIÉ À THE INDIE STONE ▸ COMMUNITY PROJECT',
      'PONT MERCIER FERMÉ ▸ JOLICOEUR INSTABLE ▸ VERDUN VERROUILLÉ ▸ SAINT-HENRI CANAL NORD',
    ];
    var idx = 0;
    var INTERVAL = 5500;

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

  // ─── Modem / packet status cycling ───────────────────────────────────────
  var modemEl = document.getElementById('modem-status');
  if (modemEl) {
    var modemStates = [
      'PKT:OK', 'RECV:OK', 'BUF:FULL', 'SYNC...', 'RETRY',
      'PKT:OK', 'XMIT:OK', 'SIG:WEAK', 'PKT:OK',  'RECV:OK',
    ];
    var modemIdx = 0;

    setInterval(function () {
      modemIdx = (modemIdx + 1) % modemStates.length;
      modemEl.textContent = modemStates[modemIdx];
    }, 2100);
  }

  // ─── Snow effect (legacy — inner pages using .snow-layer) ────────────────
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
