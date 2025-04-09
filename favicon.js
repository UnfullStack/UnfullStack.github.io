//define a prototype for picking a random item from a list
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

//define a list of favicons
let favicons = [
	"https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f920.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f92f.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f62e.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f61b.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f603.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f913.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f642.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f60e.svg",
  "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f914.svg",
];

//modify the favicon element
document.getElementById('favicon').setAttribute('href',favicons.random());