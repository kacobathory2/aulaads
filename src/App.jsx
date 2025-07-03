import './App.css';
import { FaCat } from "react-icons/fa";

function App() {
  return (
    <div className="bg-purple-300 min-h-screen">
      {/* Barra superior */}
      <div className="bg-white text-blue-900 text-3xl font-bold p-4 shadow-md fixed top-0 left-0 w-full z-10 text-center">
        <div className="flex items-center justify-center gap-4">
          <FaCat />
          <span>DudaSys</span>
          <FaCat />
        </div>
      </div>

      {/* Espaço para não cobrir o conteúdo */}
      <div className="pt-20 px-6 flex items-center justify-center min-h-screen">

        {/* Formulário estilizado com Tailwind */}
        <form
          action="https://getform.io/f/bolownga"
          method="POST"
          className="space-y-2 bg-gray-100 p-6 rounded shadow-md w-[300px] h-[250px] flex flex-col justify-center"
        >
          <h2 className="text-center font-bold text-lg">Entrar na sua conta</h2>
          <input
            type="text"
            name=""
            placeholder="Digite o e-mail"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="senha"
            name="senha"
            placeholder="Digite a senha"
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Honeypot */}
          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          />
          
        

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
