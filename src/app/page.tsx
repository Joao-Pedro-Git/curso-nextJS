import Link from "next/link";

export default function Home() {
  const aulas = [
    { id: "01", titulo: "CSS Modularizado" },
    { id: "02", titulo: "Usando Componente" },
    { id: "03", titulo: "Propriedades de Componentes" },
    { id: "04", titulo: "Componente Navegador" },
    { id: "05", titulo: "Entendendo o JSX" },
    { id: "06", titulo: "React Hoocks" },
    { id: "07", titulo: "Navegação Dinâmica" },
    { id: "08", titulo: "Navegação Dinâmica 2 Params" },
    { id: "09", titulo: "API's" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 mb-12">
      <header className="w-full bg-amber-50 py-6 text-center text-lg font-semibold shadow-md mb-8">
        Curso de NextJS com Cod3r
      </header>
      <br />
      <br />
      <div className="w-full max-w-2xl bg-white p-8 rounded-md shadow-lg">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
          Lista de Aulas
        </h2>
        <div className="space-y-4 text-center">
          <br />
          {aulas.map((aula) => (
            <Link key={aula.id} href={`/Aulas/${aula.id}-aula`}>
              <div className="p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 transition ">
                {aula.titulo}
              </div>
              <br />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
