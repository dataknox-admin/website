export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const stripped =
      url.pathname.replace(/^\/buyers-guide/, "") || "/";

    return env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );
  }
};