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
        <Link className="text-white" to="/"><h1>IEPE</h1></Link>
        <Nav className="mr-auto">
          <Link className="text-white btn mx-1" to="/sabado-primera">Sabado Primera</Link>
          <Link className="text-white btn mx-1" to="/sabado-segunda">Sabado Segunda</Link>
          <Link className="text-white btn mx-1" to="/domingo-primera">Domingo Primera</Link>
          <Link className="text-white btn mx-1" to="/domingo-segunda">Domingo Segunda</Link>
        </Nav>
      </Navbar>
    </div>
  );
};
