const assert = require('node:assert/strict');
const fs = require('node:fs');
const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
  .map(m => m[1]).filter(Boolean);
for (const source of scripts) new Function(source);
assert.match(html, /id="view-dashboard"/);
assert.match(html, /eleveStart:\s*null/);
assert.doesNotMatch(html, /eleveStart:\s*"- 2027 "/);
assert.match(html, /A_VERIFIER_HOMONYME/);
assert.match(html, /contacts Siècle absents/);
const pdfName = /-\s*20\d{2}\s+(.+?)\s+En début\b/i;
for(const y of [2026, 2027, 2028]) {
  const sample = '- ' + y + ' DUPONT Jean En début de sixième';
  assert.equal(sample.match(pdfName)?.[1], 'DUPONT Jean');
}
assert.equal('Contenu non reconnaissable'.match(pdfName), null);
console.log('Tests statiques EVA-NAT V3 : OK');
