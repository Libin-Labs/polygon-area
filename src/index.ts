export interface Point {
  readonly x: number;
  readonly y: number;
}
export function signedPolygonArea(ring: readonly Point[]): number {
  if (
    !Array.isArray(ring) ||
    ring.length < 3 ||
    ring.some((p) => !p || !Number.isFinite(p.x) || !Number.isFinite(p.y))
  )
    throw new TypeError('Expected at least three finite points');
  let sum = 0;
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i]!,
      b = ring[(i + 1) % ring.length]!;
    sum += a.x * b.y - b.x * a.y;
  }
  return sum / 2;
}
export function polygonArea(ring: readonly Point[]): number {
  return Math.abs(signedPolygonArea(ring));
}
