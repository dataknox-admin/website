export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/buyers-guide')) {
      return env.ASSETS.fetch(
        new Request(url.origin + '/buyers-guide/index.html' + url.search, request)
      );
    }

    if (url.pathname.startsWith('/third-party-maintenance')) {
      return env.ASSETS.fetch(
        new Request(url.origin + url.pathname + url.search, request)
      );
    }

    if (url.pathname.startsWith('/data-center-decommissioning')) {
      return env.ASSETS.fetch(
        new Request(url.origin + url.pathname + url.search, request)
      );
    }

    if (url.pathname.startsWith('/ai-gpu')) {
      return env.ASSETS.fetch(
        new Request(url.origin + url.pathname + url.search, request)
      );
    }

    return env.ASSETS.fetch(request);
  },
};
