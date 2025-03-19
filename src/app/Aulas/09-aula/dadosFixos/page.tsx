"use client";

import { useState } from "react";

export default function CleanDados() {
  const [dados, setDados] = useState([]);

  async function getDados() {
    const resposta = await fetch("http://localhost:3000/api/dados");
    const data = await resposta.json();

    setDados(data);
  }

  return (
    <div className="text-center w-screen h-screen">
      <br />
      <p>Dados Estaticos</p>
      <div>
        {/*!
          Quando você já sabe quais dados irá receber da API, como 'id', 'nome', 'sexo' e 'saldo', 
          pode desestruturar diretamente no parâmetro do map, como feito abaixo. 
          Isso melhora a legibilidade e evita o uso de 'item' ou 'index' desnecessários.
        */}
        {dados.map(({ id, nome, sexo, saldo }) => (
          <div key={id}>
            <br />
            <p>id: {id ?? "sem id"}</p>
            <p>nome: {nome}</p>
            <p>sexo: {sexo}</p>
            <p>saldo : {saldo}</p>
            <br />
          </div>
        ))}
        <br />
        <button className="bg-red-500 rounded-2xl p-12" onClick={getDados}>
          Chamar Dados
        </button>
      </div>
    </div>
  );
}
