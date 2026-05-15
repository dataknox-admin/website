let stripped = url.pathname;

if (url.pathname.startsWith('/third-party-maintenance')) {
  stripped = url.pathname.replace(/^\/third-party-maintenance/, '') || '/';
}

if (url.pathname.startsWith('/buyers-guide')) {
  stripped = '/buyers-guide/index.html';
}