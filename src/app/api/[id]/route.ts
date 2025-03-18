export async function GET(jarecebeu: Request) {
  // req é um nome comum usado como variável que representa a requisição que o servidor já recebeu.
  // Acessando parâmetros da URL
  const url = new URL(jarecebeu.url);
  const id = url.pathname.split("/").pop(); // Pegando o ID da URL

  return Response.json({
    id: id,
    nome: "Joao",
  });
}
