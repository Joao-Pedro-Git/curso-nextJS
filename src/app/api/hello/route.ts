export async function POST(req: Request) {
  return Response.json({ name: "Teste API", metodo: "POST" }, { status: 200 });
}

export async function GET(req: Request) {
  return Response.json({
    name: "error",
    method: req.method,
  });
}
