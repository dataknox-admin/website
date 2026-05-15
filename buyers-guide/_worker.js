const stripped = url.pathname
  .replace(/^\/third-party-maintenance/, '')
  .replace(/^\/buyers-guide/, '') || '/';