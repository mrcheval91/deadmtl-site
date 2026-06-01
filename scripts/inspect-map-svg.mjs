/**
 * DeadMTL Map SVG Inspector
 * Reads the source Montreal SVG and reports structure.
 * Does NOT mutate the source file.
 *
 * Usage:
 *   node scripts/inspect-map-svg.mjs
 */

import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SVG_PATH = join(__dirname, '..', 'public', 'maps',
  'arrondissements-quartiers-montreal-200802.svg');

console.log('DeadMTL Map SVG Inspector');
console.log('=' .repeat(60));
console.log('Source:', SVG_PATH);
console.log('');

let raw;
try {
  raw = readFileSync(SVG_PATH, 'utf8');
} catch (e) {
  console.error('ERROR: Could not read SVG at', SVG_PATH);
  console.error('Run: Copy-Item assets/ArrondissementsQuartiersMontreal_200802.svg public/maps/arrondissements-quartiers-montreal-200802.svg');
  process.exit(1);
}

const sizeKB = (Buffer.byteLength(raw, 'utf8') / 1024).toFixed(1);
console.log('File size:', sizeKB, 'KB');
console.log('');

// ── Top-level <svg> attributes ────────────────────────────────────────────────
const svgTagMatch = raw.match(/<svg[^>]*>/);
if (svgTagMatch) {
  const widthMatch  = svgTagMatch[0].match(/width="([^"]+)"/);
  const heightMatch = svgTagMatch[0].match(/height="([^"]+)"/);
  const viewBoxMatch= svgTagMatch[0].match(/viewBox="([^"]+)"/);
  console.log('SVG dimensions:',
    widthMatch  ? widthMatch[1]  : '(no width)',
    'x',
    heightMatch ? heightMatch[1] : '(no height)'
  );
  console.log('ViewBox:', viewBoxMatch ? viewBoxMatch[1] : '(none)');
  console.log('');
}

// ── All group IDs ─────────────────────────────────────────────────────────────
const groupIdMatches = [...raw.matchAll(/<g\s[^>]*id="([^"]+)"/g)];
const groupIds = groupIdMatches.map(m => m[1]);

console.log('Group IDs found:', groupIds.length);
console.log('-'.repeat(40));

// Categorize
const topLevelLayers = [
  'Eaux', 'Outline_MTL', 'Fond_arrond', 'Parcs', 'PasMTL',
  'splitter', 'Mares', 'Groupe_rues',
  'LimArrondissements', 'NomsQuartiers', 'Noms_Arr',
];

const knownBoroughs = [];
const otherGroups   = [];

for (const id of groupIds) {
  if (topLevelLayers.includes(id)) {
    console.log('  [LAYER]    ', id);
  } else {
    knownBoroughs.push(id);
  }
}

console.log('');
console.log('Borough/area groups in Fond_arrond:');
console.log('-'.repeat(40));
for (const id of groupIds.filter(id => !topLevelLayers.includes(id))) {
  console.log('  [BOROUGH]  ', id);
}

// ── Element counts ────────────────────────────────────────────────────────────
const pathCount    = (raw.match(/<path\b/g) || []).length;
const polygonCount = (raw.match(/<polygon\b/g) || []).length;
const textCount    = (raw.match(/<text\b/g) || []).length;
const glyphCount   = (raw.match(/<glyph\b/g) || []).length;

console.log('');
console.log('Element counts:');
console.log('-'.repeat(40));
console.log('  <path>    :', pathCount);
console.log('  <polygon> :', polygonCount);
console.log('  <text>    :', textCount);
console.log('  <glyph>   :', glyphCount, '(embedded font glyphs, not geographic)');

// ── Expected IDs check ────────────────────────────────────────────────────────
const expectedIds = [
  'SudOuest', 'VilleMarie', 'HochelagaMSN', 'Rosemont', 'Outremont',
  'Westmount', 'Hampstead', 'Plateau', 'NDG_CDN', 'St-Laurent', 'Anjou',
  'Villeray-StMichel', 'St-Leonard', 'MTL_Est', 'Ahuntsic', 'IleBizard',
  'Pierrefonds', 'Kirkland', 'DDO', 'Lachine', 'LaSalle', 'RDP_-_PAT',
  'Vardon', 'VilleMarie', 'CoteStLuc', 'Mtl_Nord', 'Senneville',
  'Beauconsfield', 'Dorval', 'SAB',
];

console.log('');
console.log('Expected ID check:');
console.log('-'.repeat(40));
const found    = expectedIds.filter(id => groupIds.includes(id));
const notFound = expectedIds.filter(id => !groupIds.includes(id));

console.log('  Found (' + found.length + '):', found.join(', '));
console.log('  Not found (' + notFound.length + '):', notFound.join(', '));

console.log('');
console.log('Inspection complete. Source SVG was not modified.');
