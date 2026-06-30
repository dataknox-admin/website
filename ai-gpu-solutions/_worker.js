export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip the /ai-gpu-solutions prefix so the ASSETS binding
    // can find files at their actual paths.
    const stripped = url.pathname.replace(/^\/ai-gpu-solutions/, '') || '/';
    return env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );
  },
};
