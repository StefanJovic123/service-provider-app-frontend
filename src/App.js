import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes from './pages';
import { RouteWrapper } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <RouteWrapper key={route.path} {...route} />
        ))}

        <RouteWrapper exact path="/" component={() => <div></div>} layout={() => (<div></div>)}/>
                    
      </Switch>
    </Router>
  )
}

export default App;
