const path = require("path");
const fs = require("fs");
const solc = require("solc");
const jumblerPath = path.resolve(__dirname, "contracts", "Jumbler.sol");
const source = fs.readFileSync(jumblerPath, 'utf8');
console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1);
