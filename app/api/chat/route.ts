const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ??
  'https://kamarshalaby0--wellfinanced-fastapi-app.modal.run';

export async function POST(request: Request) {
  const target = new URL('/api/chat', API_BASE_URL).toString();
  const contentType = request.headers.get('content-type') ?? 'application/json';

  const response = await fetch(target, {
    method: 'POST',
    headers: {
      'Content-Type': contentType
    },
    body: await request.text()
  });

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') ?? contentType,
      'Cache-Control': 'no-cache'
    }
  });
}
