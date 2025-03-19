import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Captura o valor após /gitHub/

  return NextResponse.json({
    id: id,
    nome: "Joao Pedro",
    idade: 18,
    photo:
      "https://avatars.githubusercontent.com/u/175753207?s=400&u=ca33d70205b44b3ea9d5cdc2ed810c860ad2250e&v=4",
    languages: ["html", "css", "js", "next"],
  });
}
