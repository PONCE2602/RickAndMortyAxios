import CharacterList from "./components/CharacterList";
import './App.css'; // Importa un archivo CSS para definir estilos personalizados

function App() {
  return (
    <div className="bg-dark text-white align-items-center">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <div className="container-fluid">
        <CharacterList />
      </div>
    </div>
  );
}

export default App;

