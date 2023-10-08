import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import CharacterList from './components/CharacterList';
import About from './components/About';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/personajes" component={CharacterList} />
                <Route path="/acerca-de" component={About} />
            </Switch>
        </Router>
    );
}

export default AppRouter;