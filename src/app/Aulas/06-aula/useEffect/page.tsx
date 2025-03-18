"use client";

import { useEffect } from "react";

export default function useEffects() {
  function alertaSecreto() {
    alert("olaaaa nao tem nada aq");
  }

  useEffect(() => {
    setTimeout(() => {
      alertaSecreto();
    }, 3000);
  });

  return (
    <>
      <div className="text-center text-blue-500">
        Espere 3 segundos para aparecer a mensagem ou aperte no botão
        <br />
        <button className="text-black" onClick={alertaSecreto}>
          Aperte aq
        </button>
      </div>
    </>
  );
}
