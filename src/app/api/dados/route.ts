import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
  return NextResponse.json([
    {
      id: 1,
      nome: "Joao",
      sexo: "M",
      saldo: 1.0,
    },
    {
      nome: "PEDRO",
      sexo: "M",
      saldo: 100,
    },
    {
      id: 3,
      nome: "Maria",
      sexo: "F",
      saldo: 12.0,
    },
  ]);
}

export async function POST() {
  return NextResponse.json(
    { message: "method not comptivied" },
    { status: 404 }
  );
}
