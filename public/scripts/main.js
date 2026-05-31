// DeadMTL main.js — progressive enhancement only

(function () {
  'use strict';

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var menu   = document.querySelector('.nav-links');

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

  // Snow effect — skip if reduced-motion preferred
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    var snowLayer = document.querySelector('.snow-layer');
    if (snowLayer) {
      for (var i = 0; i < 35; i++) {
        var flake = document.createElement('span');
        flake.className = 'snow-flake';
        flake.setAttribute('aria-hidden', 'true');

        var size = Math.random() * 2 + 1.5;
        flake.style.cssText = [
          'left:'              + (Math.random() * 100) + '%',
          'animation-delay:'  + (Math.random() * 10)  + 's',
          'animation-duration:' + (8 + Math.random() * 10) + 's',
          'opacity:'           + (0.08 + Math.random() * 0.3),
          'width:'             + size + 'px',
          'height:'            + size + 'px',
        ].join(';');

        snowLayer.appendChild(flake);
      }
    }
  }

}());
