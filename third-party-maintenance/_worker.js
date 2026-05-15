export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip the /third-party-maintenance prefix so the ASSETS binding
    // can find files at their actual paths (e.g. /server-maintenance/index.html).
    const stripped = url.pathname.replace(/^\/third-party-maintenance/, '') || '/';
    return env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );
  },
};
