export default function PropsComponente(props) {
  return (
    <div className="flex w-screen h-10 bg-gray-200 justify-between">
      <div className="text-center">{props.titulo}</div>

      <div className="text-center">
        <a href="/">{props.voltar}</a>
      </div>
    </div>
  );
}
