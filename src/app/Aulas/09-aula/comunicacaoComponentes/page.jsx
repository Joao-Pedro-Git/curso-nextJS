import React from "react";

//? Componente Pessoas exibe as propriedades id, nome e idade recebidas via props.
const Pessoas = ({ id, nome, idade }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>Nome {nome}</p>
      <p>Idade {idade}</p>
    </div>
  );
};

export default function childrenComponentes() {
  // Dados que serão passados para o componente Pessoas
  const Dados = [
    {
      id: 1,
      nome: "Joao",
      idade: 13,
    },
    {
      id: 2,
      nome: "Pedro",
      idade: 123,
    },
  ];

  //* Componente que mapeia e renderiza múltiplos componentes Pessoas
  const Componente = () => {
    return (
      <div className="text-center">
        <br />
        {Dados.map((item) => (
          //! Usando key para garantir a renderização eficiente e passar os dados para o componente Pessoas
          <Pessoas key={item.id} {...item} />
        ))}
      </div>
    );
  };

  return (
    <div className="text-center">
      <h1>Receber dados de um componente</h1>
      {/* Renderiza o Componente que mapeia os Dados */}
      <Componente />
    </div>
  );
}
