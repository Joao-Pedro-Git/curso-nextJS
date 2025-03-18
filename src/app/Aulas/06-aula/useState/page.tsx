"use client";

import { useState } from "react";

export default function State() {
  const [Contador, setContar] = useState(0);

  const btnMore = () => {
    setContar(Contador + 1);
  };
  const btnLess = () => {
    setContar(Contador - 1);
  };

  return (
    <div className="text-center text-3xl bg-gray-100 w-screen">
      <h1>{Contador}</h1>
      <h1 className="text-sm">
        {Contador > 10 ? "Passou de 10!" : "Menor que 10!"}
      </h1>
      <br />
      <button onClick={btnMore}>Contar</button>
      <br />
      <hr />
      <button onClick={btnLess}>Diminuir</button>
    </div>
  );
}
