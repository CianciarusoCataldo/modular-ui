var fs = require("fs");
var PKG = require("../package.json");
var buffer = fs.readFileSync("./CHANGELOG.md");

var fileContent = buffer.toString();

var splitted = fileContent.split("## Versions");

var resVersions = !splitted[1].split("[")[1].startsWith(PKG.version.toString())
  ? `-   [${PKG.version}](#${PKG.version})
${splitted[1]}`
  : splitted[1];

var splittedChanges = resVersions.split("## Changes");
var changes = splittedChanges[1].split("### ");

var resChanges = !changes[1].startsWith(PKG.version.toString())
  ? `
<br>

### ${PKG.version}
-   

<br>
${splittedChanges[1]}`
  : splitted[1];

fs.writeFileSync(
  "./CHANGELOG.md",
  `${splitted[0]}
## Versions
${resVersions}

## Changes

${resChanges}`
);
