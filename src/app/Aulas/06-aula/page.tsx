"use client";

import { useState } from "react";

export default function ExemploRef() {
  const [visible, setVisible] = useState(false);

  const Show = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-red-500">
          {visible ? "Conteudo nas pastas recorrentes" : ""}
        </h1>
        <button onClick={Show}>Revelar conteudo</button>

        <br />
        <br />
        <br />

        <h2 className="text-1xl">
          1. <strong>useState</strong>: Serve para gerenciar o estado de
          variáveis dentro de um componente, como controlar o número de cliques
          em um botão. <br />
          2. <strong>useRef</strong>: Permite criar uma referência para um
          elemento DOM ou um valor persistente entre renders sem causar
          re-renderização. <br />
          3. <strong>useContext</strong>: Usado para compartilhar dados entre
          vários componentes, evitando o "prop drilling". <br />
          4. <strong>useReducer</strong>: Alternativa mais robusta ao `useState`
          para gerenciar estados complexos. <br />
          5. <strong>useCallback</strong>: Memoriza funções para evitar
          recriações desnecessárias durante os renders. <br />
          6. <strong>useMemo</strong>: Memoriza valores computados, útil para
          evitar cálculos repetitivos. <br />
          7. <strong>useLayoutEffect</strong>: Disparado após a renderização,
          útil para manipulação direta do DOM. <br />
          8. <strong>useImperativeHandle</strong>: Permite personalizar os
          valores expostos a um componente pai através de `ref`. <br />
          <br />
          **Dicas**: <br />
          - Compreenda a diferença entre `useEffect` e `useLayoutEffect`. <br />
          - Gerencie o estado global com `useContext` + `useReducer`. <br />
          - Aprenda quando usar `useMemo` e `useCallback` para otimizar o
          desempenho. <br />
        </h2>
      </div>
    </>
  );
}
