export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const stripped = url.pathname.replace(/^\/third-party-maintenance/, '') || '/';

    const response = await env.ASSETS.fetch(
      new Request(url.origin + stripped + url.search, request)
    );

    // ASSETS issues bare redirects (e.g. /storage-maintenance -> /storage-maintenance/)
    // when a directory is requested without a trailing slash. Re-add the prefix so
    // the browser doesn't land on the main site's 404.
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get('Location');
      if (location) {
        const redirected = new URL(location, url.origin);
        redirected.pathname = '/third-party-maintenance' + redirected.pathname;
        return Response.redirect(redirected.toString(), response.status);
      }
    }

    return response;
  },
};
