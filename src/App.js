import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DeepBlock from './components/DeepBlock';
import './App.css';

const App = ({ blocks }) => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/block/:id" strict>
            <DeepBlock />
          </Route>
          <Route path="/">
            <DeepBlock />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
