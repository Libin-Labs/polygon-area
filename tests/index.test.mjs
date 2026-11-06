import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('computes rectangle area', () => {
  assert.equal(
    api.polygonArea([
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 3 },
      { x: 0, y: 3 },
    ]),
    12,
  );
});
test('returns positive signed area counterclockwise', () => {
  assert.equal(
    api.signedPolygonArea([
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 4, y: 3 },
      { x: 0, y: 3 },
    ]),
    12,
  );
});
test('returns negative signed area clockwise', () => {
  assert.equal(
    api.signedPolygonArea([
      { x: 0, y: 3 },
      { x: 4, y: 3 },
      { x: 4, y: 0 },
      { x: 0, y: 0 },
    ]),
    -12,
  );
});
test('accepts repeated closing vertex', () => {
  assert.equal(
    api.polygonArea([
      { x: 0, y: 0 },
      { x: 2, y: 0 },
      { x: 2, y: 2 },
      { x: 0, y: 2 },
      { x: 0, y: 0 },
    ]),
    4,
  );
});
test('returns zero for collinear ring', () => {
  assert.equal(
    api.polygonArea([
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ]),
    0,
  );
});
test('rejects non-finite point', () => {
  assert.throws(
    () =>
      api.polygonArea([
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: Infinity },
      ]),
    TypeError,
  );
});
