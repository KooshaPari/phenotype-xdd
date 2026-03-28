import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const config = readFileSync(join(process.cwd(), '.vitepress/config.mts'), 'utf8');

assert.ok(config.includes('phenotype-xdd'));
assert.ok(config.includes('Reference'));
assert.ok(config.includes('Guide'));
