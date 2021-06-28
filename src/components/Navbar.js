import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const Navbar_2 = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
       <h1 className="text-white">IEPE</h1>
        <Nav className="mr-auto">
          <Link className="text-white btn mx-1" to="/sabado-primera">Sábado Primera</Link>
          <Link className="text-white btn mx-1" to="/sabado-segunda">Sábado Segunda</Link>
          <Link className="text-white btn mx-1" to="/domingo-primera">Domingo Primera</Link>
          <Link className="text-white btn mx-1" to="/domingo-segunda">Domingo Segunda</Link>
        </Nav>
      </Navbar>
    </div>
  );
};
