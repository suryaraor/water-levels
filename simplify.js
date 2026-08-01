const fs = require("fs");
const path = require("path");

function dpSimplify(points, tolerance) {
  if (points.length < 3) return points;
  function sqDist(p, a, b) {
    let x = a[0], y = a[1], dx = b[0] - x, dy = b[1] - y;
    if (dx !== 0 || dy !== 0) {
      const t = ((p[0] - x) * dx + (p[1] - y) * dy) / (dx * dx + dy * dy);
      if (t > 1) { x = b[0]; y = b[1]; }
      else if (t > 0) { x += dx * t; y += dy * t; }
    }
    dx = p[0] - x; dy = p[1] - y;
    return dx * dx + dy * dy;
  }
  function simplifyDP(pts, first, last, tol, out) {
    let maxDist = tol, index = -1;
    for (let i = first + 1; i < last; i++) {
      const d = sqDist(pts[i], pts[first], pts[last]);
      if (d > maxDist) { index = i; maxDist = d; }
    }
    if (index > -1) {
      if (index - first > 1) simplifyDP(pts, first, index, tol, out);
      out.push(pts[index]);
      if (last - index > 1) simplifyDP(pts, index, last, tol, out);
    }
  }
  const tol = tolerance * tolerance;
  const out = [points[0]];
  simplifyDP(points, 0, points.length - 1, tol, out);
  out.push(points[points.length - 1]);
  return out;
}

const gj = JSON.parse(fs.readFileSync(path.join(__dirname, "telangana.geojson"), "utf8"));

const TOL = 0.009; // ~900m
const districts = [];
let totalIn = 0, totalOut = 0;

for (const f of gj.features) {
  const name = f.properties.district;
  const g = f.geometry;
  const polys = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  const rings = [];
  for (const poly of polys) {
    for (const ring of poly) {
      totalIn += ring.length;
      let simplified = dpSimplify(ring, TOL);
      simplified = simplified.map(([lon, lat]) => [Math.round(lon * 10000) / 10000, Math.round(lat * 10000) / 10000]);
      totalOut += simplified.length;
      rings.push(simplified);
    }
  }
  districts.push({ name, rings });
}

console.log("points in:", totalIn, "points out:", totalOut);
fs.writeFileSync(path.join(__dirname, "telangana_simplified.json"), JSON.stringify(districts));
console.log("wrote telangana_simplified.json, size:", fs.statSync(path.join(__dirname, "telangana_simplified.json")).size);
