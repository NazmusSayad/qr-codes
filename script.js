const table = document.querySelector('table')
const url = `/qr/${location.search.slice(1)}.svg`

// -----------------------------------------------
for (let i = 0; i < 4; i++) {
  const row = table.insertRow()

  for (let i = 0; i < 3; i++) {
    const cell = row.insertCell()
    cell.innerHTML = `<img src="${url}" />`
  }
}
