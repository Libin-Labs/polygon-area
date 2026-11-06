import * as api from '@lp-labs/polygon-area';
import { signedPolygonArea, polygonArea } from '@lp-labs/polygon-area';
console.log(
  polygonArea([
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 3 },
    { x: 0, y: 3 },
  ]),
);
// @ts-expect-error invalid argument must be rejected by declarations
api.polygonArea('ring');
