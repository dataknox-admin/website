export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Strip the /ai-gpu prefix so the ASSETS binding
    // can find files at their actual paths (e.g. /gpu-procurement/index.html).
    const stripped = url.pathname.replace(/^\/ai-gpu/, '') || '/';
    return env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );
  },
};
