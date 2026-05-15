export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    let stripped = url.pathname;
    let prefix = '';

    if (url.pathname.startsWith('/third-party-maintenance')) {
      prefix = '/third-party-maintenance';
      stripped = url.pathname.replace(/^\/third-party-maintenance/, '') || '/';
    }

    if (url.pathname.startsWith('/buyers-guide')) {
      prefix = '/buyers-guide';
      stripped = '/buyers-guide/index.html';
    }

    const response = await env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );

    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('Location');
      if (location && prefix) {
        const redirected = new URL(location, url.origin);
        redirected.pathname = prefix + redirected.pathname;
        return Response.redirect(redirected.toString(), response.status);
      }
    }

    return response;
  },
};