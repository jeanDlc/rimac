import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/pages/Home';
import Plan from './components/pages/Plan';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Gracias from './components/pages/Gracias';
import UsuarioState from './context/usuario/UsuarioState';
import SeguroState from './context/seguro/SeguroState';
ReactDOM.render(
  <React.StrictMode>
    <UsuarioState>
      <SeguroState>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route path='/arma-tu-plan' >
              <Plan/>
            </Route>
            <Route path='/gracias' >
              <Gracias/>
            </Route>
          </Switch>
        </BrowserRouter>
      </SeguroState>
    </UsuarioState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
