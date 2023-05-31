import qrCodes from "./qr.js";
const target = 12;

const page = document.getElementById("page");

function printImage(url) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.innerHTML = `<img src="${url}" />`;
  page.appendChild(div);
}

let i = 1;
while (true) {
  for (const qr of qrCodes) {
    printImage(qr);
    i++;
    if (i > target) break;
  }
  if (i > target) break;
}
