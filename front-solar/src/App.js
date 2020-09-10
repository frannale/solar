import React from "react";
import { Chart, Cards, Navbar } from "./components";
import Listado from "./components/List/Listado";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends React.Component {

render(){
  return ( 
    <Router> 
        <Navbar />
        <div style={{paddingRight:25,paddingLeft:25}}>
          <Switch >
            <Route path="/listado">
              <Listado/>
            </Route>
            <Route path="/historico">
              <Cards />
            </Route>
            <Route path="/grafico">
              <Chart />
            </Route>
            <Route path="/">
              <Chart />
            </Route>
          </Switch>
        </div>        
    </Router>
  );
}
}export default App;