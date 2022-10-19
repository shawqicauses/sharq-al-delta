const poppinsFont = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

const tajawalFont = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Tajawal:300,400,500,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

const poppinsFontElement = document.createElement("link")
poppinsFontElement.setAttribute("rel", "stylesheet")
poppinsFontElement.setAttribute("href", poppinsFont)

const tajawalFontElement = document.createElement("link")
tajawalFontElement.setAttribute("rel", "stylesheet")
tajawalFontElement.setAttribute("href", tajawalFont)

document.head.appendChild(poppinsFontElement)
document.head.appendChild(tajawalFontElement)
