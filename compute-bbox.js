const fs = require("fs");
const districts = JSON.parse(fs.readFileSync("telangana_simplified.json", "utf8"));

let B = { minLon: 1e9, maxLon: -1e9, minLat: 1e9, maxLat: -1e9 };
districts.forEach(d => d.rings.forEach(r => r.forEach(([lon, lat]) => {
  if (lon < B.minLon) B.minLon = lon; if (lon > B.maxLon) B.maxLon = lon;
  if (lat < B.minLat) B.minLat = lat; if (lat > B.maxLat) B.maxLat = lat;
})));
const PAD = 0.28;
B.minLon -= PAD; B.maxLon += PAD; B.minLat -= PAD; B.maxLat += PAD;
const avgLatRad = (B.minLat + B.maxLat) / 2 * Math.PI / 180;
const cosLat = Math.cos(avgLatRad);
const VBW = 1000;
const lonSpan = (B.maxLon - B.minLon) * cosLat;
const pxPerDeg = VBW / lonSpan;
const VBH = (B.maxLat - B.minLat) * pxPerDeg;

const SCALE = 2.8; // output resolution multiplier
const W = Math.round(VBW * SCALE);
const H = Math.round(VBH * SCALE);

console.log(JSON.stringify({ B, VBW, VBH, W, H }));
