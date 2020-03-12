import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import DeepBlock from './components/DeepBlock';
import Blocks from './store/Blocks';
import './App.css';

const App = ({ blocks }) => {
  return (
    <Router>
      <div className="App">
        <Blocks>
          <Switch>
            <Route path="/block/:id" strict>
              <DeepBlock />
            </Route>
            <Route path="/">
              <DeepBlock />
            </Route>
          </Switch>
        </Blocks>
      </div>
    </Router>
  );
}

export default App;
