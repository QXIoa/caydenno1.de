export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/.well-known/matrix/server') {
      return new Response(JSON.stringify({"m.server": "m.caydenno1.de:443"}), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return env.ASSETS.fetch(request);
  }
};
