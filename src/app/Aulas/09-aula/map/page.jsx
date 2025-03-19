"use client";

import { useState } from "react";

export default function Api() {
  const [dados, puxarDados] = useState([]);

  async function getApi() {
    const resposta = await fetch("http://localhost:3000/api/dados");
    const data = await resposta.json();
    console.log(data);

    puxarDados(data);
  }

  return (
    <div className="text-center p-16">
      <br />
      <h2>Deseja chamar nossa Api para ver dados de clientes?</h2>
      <br />

      <div>
        {/*
        //? item: o valor do elemento atual.
        //*index: a posição do item no array. 
        //! map() percorre um array e cria elementos.
        //!key é crucial para a performance, garantindo que os itens sejam identificados corretamente.
        */
        }
        {
          dados.map((item, index) => (
            <div key={index}>
              <br />
              <p>{item.id ?? "error"}</p>
              <p>{item.nome}</p>
              <p>{item.sexo}</p>
              <p>{item.saldo}</p>
              <br />
            </div>
          ))
        }
      </div>
      <br />
      <button
        className="bg-red-500 rounded-2xl cursor-pointer"
        onClick={getApi}
      >
        chamar
      </button>
    </div>
  );
}
