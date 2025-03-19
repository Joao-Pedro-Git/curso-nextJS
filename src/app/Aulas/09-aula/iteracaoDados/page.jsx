import React from "react";

export default function Iterar() {
  //? Dados são armazenados em um objeto
  const dados = {
    1: { nome: "Joao", idade: 25 },
    2: { nome: "Maria", idade: 15 },
    3: { nome: "Nicolly", idade: 19 },
  };

  // Componente que será responsável por renderizar os dados
  const Componente = () => {
    return (
      <div className="text-center">
        {/* //! Itera sobre o objeto 'dados' usando Object.entries */}
        {/* //! Object.entries converte o objeto em um array de arrays [chave, valor] */}
        {Object.entries(dados).map(([id, { nome, idade }]) => {
          // Para cada entrada, criamos um div com as informações
          return (
            <div key={id}>
              <p>ID: {id}</p>
              <p>Nome: {nome}</p>
              <p>Idade: {idade}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* //! Chama o componente que exibe os dados */}
      <Componente />
    </>
  );
}
