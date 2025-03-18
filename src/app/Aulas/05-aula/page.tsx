"use client";

import { useState } from "react";

export default function Aula05() {
  const titulo = "Entendendo JSX";

  const somar = (a, b) => {
    return a * b;
  };

  // Criando um estado com useState para alterar o valor dinamicamente
  const [contador, setContador] = useState(0);

  // Função para incrementar o contador
  const incrementar = () => setContador(contador + 1);

  return (
    <>
      {/*Elemento - Título original*/}
      <br />
      <div className="text-center">{titulo}</div>
      <br />
      <hr />

      {/*Elemento - Título em maiúsculas*/}
      <br />
      <div className="text-center">{titulo.toUpperCase()}</div>
      <br />
      <hr />

      {/*Elemento - Resultado da multiplicação*/}
      <br />
      <div className="text-center">{somar(10, 10)}</div>
      <br />
      <hr />

      {/*Elemento - Objeto convertido para string*/}
      <br />
      <div className="text-center">
        {JSON.stringify({ nome: "João", idade: 19 })}
      </div>
      <br />
      <hr />

      {/*Elemento - Contador interativo*/}
      <br />
      <div className="text-center">
        <p>Contador: {contador}</p>
        <button
          onClick={incrementar}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Incrementar
        </button>
      </div>
      <br />
      <hr />

      {/*Elemento - Condicional*/}
      {/*condição ? expressão_se_verdadeira : expressão_se_falsa*/}
      <br />
      <div className="text-center">
        {contador > 5 ? (
          <p>Você alcançou o limite!</p>
        ) : (
          <p>Continue contando...</p>
        )}
      </div>
      <br />
      <hr />
    </>
  );
}
