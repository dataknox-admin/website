export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip /third-party-maintenance prefix so ASSETS binding finds files at their actual paths.
    const stripped = url.pathname.replace(/^\/third-party-maintenance/, '') || '/';
    return env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );
  },
};
