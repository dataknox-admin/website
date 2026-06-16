export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip the /data-center-decommissioning prefix so the ASSETS binding
    // can find files at their actual paths (e.g. /server-decommissioning/index.html).
    const stripped = url.pathname.replace(/^\/data-center-decommissioning/, '') || '/';
    return env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );
  },
};
