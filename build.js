const fs = require("fs");
const path = require("path");
const dir = __dirname;

const template = fs.readFileSync(path.join(dir, "atlas.template.html"), "utf8");
const districts = fs.readFileSync(path.join(dir, "telangana_simplified.json"), "utf8");
const reservoirs = fs.readFileSync(path.join(dir, "reservoirs.json"), "utf8");
const rivers = fs.readFileSync(path.join(dir, "rivers.json"), "utf8");
const chains = fs.readFileSync(path.join(dir, "chains.json"), "utf8");

// validate JSON
JSON.parse(districts); JSON.parse(reservoirs); JSON.parse(rivers); JSON.parse(chains);

let out = template
  .replace("/*__DISTRICTS__*/", districts)
  .replace("/*__RESERVOIRS__*/", reservoirs)
  .replace("/*__RIVERS__*/", rivers)
  .replace("/*__CHAINS__*/", chains);

fs.writeFileSync(path.join(dir, "index.html"), out);
console.log("Built index.html, size:", fs.statSync(path.join(dir, "index.html")).size);
