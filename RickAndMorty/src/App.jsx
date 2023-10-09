import CharacterList from "./components/CharacterList";
import './App.css';

function App() {
  return (
    <div className="bg-dark text-white align-items-center">
      <h1 className="text-center display-1 py-4 text-capitalize fw-bold">Rick and Morty</h1>
      <div className="container-fluid">
        <CharacterList />
      </div>
    </div>
  );
}

export default App;

