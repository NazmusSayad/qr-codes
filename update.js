const fs = require("fs");
const path = require("path");
const dir = "./images";

const children = fs.readdirSync(dir);
const images = children.map((file) => {
  return `/${path.join(dir, file)}`.replaceAll("\\", "/");
});

const outputText = `export default ${JSON.stringify(images)}`;
fs.writeFileSync("./qr.js", outputText);
