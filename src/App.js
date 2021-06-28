import React from "react";
import Links from "./components/Links";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "firebase/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import { User } from "./components/User";
import { Navbar_2 } from "./components/Navbar";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import DomingoListPrimera from "./components/DomingoListPimera";
import DomingoListSegunda from "./components/DomingoListSegunda";
import SabadoListPimera from "./components/SabadoListPimera";
import SabadoListSegunda from "./components/SabadoListSegunda";


function App() {
  return (
    <Router>
      <Navbar_2/>
      <Switch>
        <Route exact path="/">
        <div className="container p-4">
        <div className="row">
          <Links />
        </div>
        <ToastContainer />
      </div>
        </Route>
        <Route exact path="planilla-iepe/user">
          <User />
        </Route>
        <Route exact path="planilla-iepe/sabado-primera">
          <SabadoListPimera />
        </Route>
        <Route exact path="planilla-iepe/sabado-segunda">
          <SabadoListSegunda />
        </Route>
        <Route exact path="planilla-iepe/domingo-primera">
          <DomingoListPrimera />
        </Route>
        <Route exact path="planilla-iepe/domingo-segunda">
          <DomingoListSegunda />
        </Route>
      </Switch>

     
    </Router>
  );
}

export default App;
