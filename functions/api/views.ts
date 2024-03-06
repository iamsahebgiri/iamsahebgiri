interface Env {
  IAMSAHEBGIRI_PAGE_VIEWS: KVNamespace;
}

interface Request {
  path: string;
}


export const onRequestPut: PagesFunction<Env> = async (context) => {
  const {
    request,
    env: { IAMSAHEBGIRI_PAGE_VIEWS },
  } = context;

  const { path } = await request.json<Request>();

  if (!path) {
    return new Response(null, {
      status: 400,
      statusText: "Bad Request",
    });
  }

  let currentCount = Number(await IAMSAHEBGIRI_PAGE_VIEWS.get(path));
  if (!currentCount || isNaN(currentCount)) {
    currentCount = 0;
  }

  await IAMSAHEBGIRI_PAGE_VIEWS.put(path, String(currentCount + 1));

  return new Response(null, {
    status: 204,
    statusText: "ok",
  });
};


export const onRequestGet: PagesFunction<Env> = async (
    context,
  ) => {
    const {
      request,
      env: { IAMSAHEBGIRI_PAGE_VIEWS },
    } = context;
  
    const path = new URL(request.url).searchParams.get('path');
  
    if (!path) {
      return new Response(null, {
        status: 404,
      });
    }
  
    const encodedPath = encodeURIComponent(path);
    const count = (await IAMSAHEBGIRI_PAGE_VIEWS.get(encodedPath)) ?? 0;
  
    return new Response(JSON.stringify({ count }), {
      status: 200,
    });
  };