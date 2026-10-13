// Abre en una pestaña nueva todo link que salga del portfolio (LinkedIn, GitHub,
// tiendas, itch.io...) y los PDF, como el CV. Los links internos y el email no cambian.
document.querySelectorAll('a[href]').forEach(function (a) {
  var url;
  try {
    url = new URL(a.getAttribute('href'), location.href);
  } catch (e) {
    return;
  }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  var isExternal = url.host !== location.host;
  var isFile = /\.pdf$/i.test(url.pathname);
  if (isExternal || isFile) {
    a.target = '_blank';
    a.rel = 'noopener';
  }
});
