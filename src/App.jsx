import './App.css';

function App() {
  return (
    <div>
      {/* Barra superior */}
      <div className="bg-blue-800 text-white text-3xl font-bold p-4 shadow-md fixed top-0 left-0 w-full z-10">
        Hello world!
      </div>

      {/* Espaço para não cobrir o conteúdo */}
      <div className="pt-20 px-6 space-y-6">

        {/* Botão em vermelho com borda verde */}
        <button className="bg-red-500 text-white font-bold py-2 px-4 border-2 border-green-500 rounded">
          Me clique-me
        </button>

        {/* Formulário estilizado com Tailwind */}
        <form
          action="https://getform.io/f/bolownga"
          method="POST"
          className="space-y-4 bg-gray-100 p-6 rounded shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>

          {/* Honeypot */}
          <input
            type="hidden"
            name="_gotcha"
            style={{ display: "none !important" }}
          />

          {/* Checkbox */}
          <label className="flex items-center gap-2">
            <input type="checkbox" name="subscribe" defaultValue="yes" defaultChecked />
            Inscrever-se
          </label>
          <input type="hidden" name="subscribe" defaultValue="no" />

          {/* Radio buttons */}
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="male" defaultChecked />
              Masculino
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="female" />
              Feminino
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="other" />
              Outro
            </label>
          </div>

          {/* Select */}
          <select
            name="work-experience"
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="one-year">0-1 ano</option>
            <option value="one-five-years">1-5 anos</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
