const path = require("path");
const process = require("process");

const repoRootFolder = path.resolve(__dirname, "../../..");
process.chdir(repoRootFolder);

process.argv = [
  process.argv[0], // node
  process.argv[1], // start-mcp.js
  "--quiet",
  "rush-mcp",
];

require(path.join(repoRootFolder, "common/scripts/install-run-rush"));
