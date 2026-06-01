/**
 * DeadMTL Interactive Tactical Map
 * Client-side only. No network calls beyond loading the SVG asset.
 * No tracking, no analytics, no backend.
 *
 * Architecture:
 * 1. Receive zone data from page (injected via data attribute).
 * 2. Fetch and inject SVG into viewport.
 * 3. Apply zone classes and data attributes to SVG elements.
 * 4. Handle hover (preview) and click (lock selection).
 * 5. Manage display mode switching.
 * 6. Pan/zoom via CSS transform.
 */

(function () {
  'use strict';

  // ─── State ──────────────────────────────────────────────────────────────────

  var mapEl         = document.getElementById('dead-map');
  var viewportEl    = document.getElementById('dead-map-viewport');
  var panelEmpty    = document.getElementById('dead-map-panel-empty');
  var panelContent  = document.getElementById('dead-map-panel-content');
  var currentMode   = 'status';
  var selectedId    = null;
  var svgEl         = null;

  // Pan/zoom state
  var scale = 1, panX = 0, panY = 0;
  var isPanning = false, startX = 0, startY = 0;

  if (!mapEl || !viewportEl) return;

  // Zone data injected by the Astro component
  var zones = JSON.parse(
    document.getElementById('dead-map-data').textContent || '[]'
  );

  var zoneById = {};
  zones.forEach(function(z) { zoneById[z.id] = z; });

  // ─── Load SVG ───────────────────────────────────────────────────────────────

  viewportEl.classList.add('is-loading');

  var SVG_PATH = '/maps/arrondissements-quartiers-montreal-200802.svg';

  fetch(SVG_PATH)
    .then(function(r) { return r.text(); })
    .then(function(text) {
      viewportEl.classList.remove('is-loading');
      var parser = new DOMParser();
      var doc    = parser.parseFromString(text, 'image/svg+xml');
      svgEl = doc.documentElement;

      // Make SVG fill viewport and preserve aspect ratio
      svgEl.setAttribute('width', '100%');
      svgEl.setAttribute('height', '100%');
      svgEl.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svgEl.style.display = 'block';

      // ── Layer visibility ─────────────────────────────────────────────────
      hideLayer('Groupe_rues');    // Heavy road layer — hidden by default
      hideLayer('NomsQuartiers');  // Tiny neighborhood text — hidden

      // ── Apply zone metadata ──────────────────────────────────────────────
      zones.forEach(function(zone) {
        if (!zone.svgId) return;
        var el = svgEl.querySelector('#' + CSS.escape(zone.svgId));
        if (!el) return;

        el.classList.add('dead-map-zone');
        el.setAttribute('data-zone-id', zone.id);
        el.setAttribute('data-status', zone.status);
        el.setAttribute('data-danger', zone.danger);
        el.setAttribute('data-visibility', zone.visibility);
        el.classList.add('dead-map-zone--danger-' + zone.danger);

        if (zone.visibility === 'classified') {
          el.classList.add('dead-map-zone--classified');
        } else if (zone.visibility !== 'hidden') {
          el.setAttribute('role', 'button');
          el.setAttribute('tabindex', '0');
          el.setAttribute('aria-label', zone.name + ' — click for details');
        }
      });

      viewportEl.appendChild(svgEl);
      applyMode(currentMode);
      attachSvgEvents();
      attachZoomPan();

    })
    .catch(function(err) {
      viewportEl.classList.remove('is-loading');
      viewportEl.innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;height:100%;' +
        'font-family:var(--font-mono);font-size:0.7rem;color:var(--red);letter-spacing:0.12em;">' +
        'MAP LOAD FAILED &mdash; ' + err.message + '</div>';
    });

  // ─── SVG event handlers ──────────────────────────────────────────────────────

  function attachSvgEvents() {
    // Delegate click/keyboard to zone elements
    viewportEl.addEventListener('click', function(e) {
      var target = e.target;
      var zoneEl = null;

      // Walk up to find a zone element
      while (target && target !== viewportEl) {
        if (target.classList && target.classList.contains('dead-map-zone')) {
          zoneEl = target;
          break;
        }
        target = target.parentElement;
      }

      if (!zoneEl) {
        deselect();
        return;
      }

      var zoneId = zoneEl.getAttribute('data-zone-id');
      if (!zoneId) return;
      selectZone(zoneId);
    });

    viewportEl.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var el = document.activeElement;
        if (el && el.classList.contains('dead-map-zone')) {
          e.preventDefault();
          var zoneId = el.getAttribute('data-zone-id');
          if (zoneId) selectZone(zoneId);
        }
      }
      if (e.key === 'Escape') deselect();
    });
  }

  // ─── Zone selection ──────────────────────────────────────────────────────────

  function selectZone(zoneId) {
    var zone = zoneById[zoneId];
    if (!zone) return;

    // Deselect previous
    if (selectedId) {
      var prevEl = svgEl && svgEl.querySelector('[data-zone-id="' + selectedId + '"]');
      if (prevEl) prevEl.classList.remove('dead-map-zone--selected');
    }

    selectedId = zoneId;
    var el = svgEl && svgEl.querySelector('[data-zone-id="' + zoneId + '"]');
    if (el) el.classList.add('dead-map-zone--selected');

    renderPanel(zone);
  }

  function deselect() {
    if (selectedId && svgEl) {
      var el = svgEl.querySelector('[data-zone-id="' + selectedId + '"]');
      if (el) el.classList.remove('dead-map-zone--selected');
    }
    selectedId = null;
    if (panelContent)  panelContent.hidden  = true;
    if (panelEmpty)    panelEmpty.hidden     = false;
  }

  function renderPanel(zone) {
    if (!panelContent || !panelEmpty) return;
    panelEmpty.hidden   = true;
    panelContent.hidden = false;

    var statusLabel  = zone.status.charAt(0).toUpperCase() + zone.status.slice(1);
    var dangerLabel  = ['Minimal','Low','Moderate','High','Critical','Collapse'][zone.danger] || zone.danger;
    var classified   = zone.visibility === 'classified';

    var routeHtml = '';
    if (zone.routes && zone.routes.length > 0) {
      routeHtml =
        '<div class="dmc__routes">' +
          '<span class="dmc__routes-label">Routes</span>' +
          '<div class="dmc__route-list">' +
            zone.routes.map(function(r) { return '<span>' + r + '</span>'; }).join('') +
          '</div>' +
        '</div>';
    }

    var linkHtml = '';
    if (zone.id === 'SudOuest' || zone.id === 'LaSalle' || zone.id === 'Verdun') {
      linkHtml = '<a class="dmc__link" href="/saint-paul-emard/">S-P-E Dossier &rsaquo;</a>';
    }

    var noSvgHtml = '';
    if (!zone.svgId) {
      noSvgHtml = '<p class="dmc__no-map">No map polygon — metadata only</p>';
    }

    panelContent.innerHTML =
      '<div class="dmc__name">' + zone.name + '</div>' +
      '<div class="dmc__badges">' +
        '<span class="dmc__badge dmc__badge--status-' + zone.status + '">' + statusLabel + '</span>' +
        '<span class="dmc__badge dmc__badge--danger-' + zone.danger + '">Danger ' + dangerLabel + '</span>' +
        (classified ? '<span class="dmc__badge dmc__badge--classified">Classified</span>' : '') +
      '</div>' +
      '<p class="dmc__summary">' +
        (classified ? '[REDACTED — classified sector]' : zone.summary) +
      '</p>' +
      routeHtml +
      linkHtml +
      noSvgHtml;
  }

  // ─── Display modes ────────────────────────────────────────────────────────────

  function applyMode(mode) {
    currentMode = mode;
    if (!mapEl) return;

    // Remove old mode classes
    mapEl.className = mapEl.className.replace(/\bdead-map--mode-\S+/g, '').trim();
    mapEl.classList.add('dead-map--mode-' + mode);

    // Update button states
    var btns = document.querySelectorAll('.dead-map__mode-btn');
    btns.forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-mode') === mode);
    });
  }

  var modeBtns = document.querySelectorAll('.dead-map__mode-btn');
  modeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      applyMode(btn.getAttribute('data-mode'));
    });
  });

  // ─── Layer toggle ─────────────────────────────────────────────────────────────

  var roadToggle = document.getElementById('dead-map-toggle-roads');
  if (roadToggle) {
    roadToggle.addEventListener('change', function() {
      if (!svgEl) return;
      var layer = svgEl.querySelector('#Groupe_rues');
      if (layer) layer.style.display = roadToggle.checked ? '' : 'none';
    });
  }

  // ─── Zoom / pan ──────────────────────────────────────────────────────────────

  function attachZoomPan() {
    applyTransform();

    // Zoom buttons
    var zoomIn  = document.getElementById('dead-map-zoom-in');
    var zoomOut = document.getElementById('dead-map-zoom-out');
    var zoomRst = document.getElementById('dead-map-zoom-reset');

    if (zoomIn)  zoomIn.addEventListener('click',  function() { zoom(0.25); });
    if (zoomOut) zoomOut.addEventListener('click', function() { zoom(-0.25); });
    if (zoomRst) zoomRst.addEventListener('click', function() { resetView(); });

    // Wheel zoom
    viewportEl.addEventListener('wheel', function(e) {
      e.preventDefault();
      zoom(e.deltaY < 0 ? 0.15 : -0.15);
    }, { passive: false });

    // Touch/mouse pan
    viewportEl.addEventListener('mousedown', startPan);
    viewportEl.addEventListener('touchstart', startPan, { passive: true });
    window.addEventListener('mousemove',  doPan);
    window.addEventListener('touchmove',  doPan, { passive: false });
    window.addEventListener('mouseup',   endPan);
    window.addEventListener('touchend',  endPan);
  }

  function zoom(delta) {
    var newScale = Math.min(Math.max(scale + delta, 0.4), 6);
    scale = newScale;
    applyTransform();
  }

  function resetView() {
    scale = 1; panX = 0; panY = 0;
    applyTransform();
  }

  function startPan(e) {
    if (e.target && e.target.classList.contains('dead-map-zone')) return;
    isPanning = true;
    var point = e.touches ? e.touches[0] : e;
    startX = point.clientX - panX;
    startY = point.clientY - panY;
  }

  function doPan(e) {
    if (!isPanning) return;
    if (e.touches) e.preventDefault();
    var point = e.touches ? e.touches[0] : e;
    panX = point.clientX - startX;
    panY = point.clientY - startY;
    applyTransform();
  }

  function endPan() { isPanning = false; }

  function applyTransform() {
    if (!svgEl) return;
    svgEl.style.transform =
      'translate(' + panX + 'px, ' + panY + 'px) scale(' + scale + ')';
    svgEl.style.transformOrigin = '0 0';
  }

  // ─── Helpers ─────────────────────────────────────────────────────────────────

  function hideLayer(id) {
    if (!svgEl) return;
    var el = svgEl.querySelector('#' + id);
    if (el) el.style.display = 'none';
  }

}());
