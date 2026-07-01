export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const newPath = url.pathname.replace('/ai-gpu', '') || '/';
    url.pathname = newPath;
    return env.ASSETS.fetch(url.toString(), request);
  }
};
