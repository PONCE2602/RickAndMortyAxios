import CharacterList from "./CharacterList";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div className="bg-dark text-white align-items-center">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route path="/acerca-de" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App

