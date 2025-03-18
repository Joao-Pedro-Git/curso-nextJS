"use client";

import { useRef } from "react";

export default function Ref() {
  // Criando uma referência para o input (inicialmente null)
  const Referencia = useRef(null);

  // Função que foca no input ao clicar no botão
  const click = () => {
    Referencia.current?.focus(); // Se a referência existir, aplica o foco
  };

  return (
    <div className="text-center">
      {/* Input que recebe a referência */}
      <input type="text" placeholder="Digite algo" ref={Referencia} />
      <br />
      {/* Botão que, ao ser clicado, ativa o foco no input */}
      <button onClick={click}>Ir para Input</button>
    </div>
  );
}
