export async function POST() {
  return Response.json({ name: "Teste API", metodo: "POST" }, { status: 200 });
}

export async function GET(req: Request) {
  // Acessando parâmetros da URL
  const url = new URL(req.url);
  const params = url.searchParams.toString(); // Pega os parâmetros da query string

  return Response.json({
    name: "error",
    params: params, // Aqui, mostramos os parâmetros da URL
  });
}
