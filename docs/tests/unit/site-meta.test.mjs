import assert from 'node:assert/strict';
import { createSiteMeta } from '../helpers/site-meta.mjs';

const meta = createSiteMeta();

assert.equal(meta.docsRoot, '/docs/');
assert.ok(meta.locales['zh-CN']);
assert.ok(meta.locales['zh-TW']);
assert.ok(meta.locales.fa);
assert.ok(meta.locales['fa-Latn']);
