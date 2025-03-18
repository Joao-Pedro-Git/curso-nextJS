import LinkComponent from "./LinkComponent";

export default function Aula04() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "10vh",
          width: "100vw",
        }}
      >
        <LinkComponent
          destino="/Ola"
          descricao="description"
          titulo="titulo dinamico"
        />
      </div>

      {/*"Outro componente com diferente props*/}
      <div className="w-sceen h-auto m-auto text-center flex items-center justify-center">
        <LinkComponent
          destino="/"
          descricao="nao sei"
          titulo="voltar"
          cor="red"
        />
      </div>
      <br />
      {/*"Outro componente com diferente props*/}
      <div className="w-sceen h-auto m-auto text-center flex items-center justify-center">
        <LinkComponent destino="/" descricao="nao sei" titulo="voltar" />
      </div>
    </>
  );
}
