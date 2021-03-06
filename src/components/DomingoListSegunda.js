import React, { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { firebase, googleAuthProvider, db } from "../firebase";
import BootstrapTable from "react-bootstrap-table-next";
import { CardGroup } from "react-bootstrap";

const DomingoListSegunda = () => {
  const [reservas, setReservas] = useState([]);
  const [contador, setContador] = useState(0);
  const [isPastor, setIsPastor] = useState(false);

  const getReservas = async () => {
    await db
      .collection("Reservas-domingo-segunda")
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setReservas(docs);
      });
  };

  useEffect(() => {
    getReservas();
  }, []);

  const validation = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        if (user.providerData[0].email === "iepuebloelegido@gmail.com") {
          setIsPastor(true);
        } else {
          console.log("no es el pastor");
        }
      });
  };
  const suma = () => {
    const cuposSuma = reservas.map((elem) => Number(elem.cupos));
    let numeros = cuposSuma,
      suma = 0;
    numeros.forEach(function (numero) {
      suma += numero;
    });
    setContador(suma);
  };
  const usuarios = reservas;
  const columns = [
    {
      dataField: "name",
      text: "Familia",
    },
    {
      dataField: "cupos",
      text: "Cupos",
    },
  ];
  return (
    <div className="container">
      <h1>
        Domingo Segunda Reunión{" "}
        {contador ? (
          <h2>Cupos Libres {180 - contador}</h2>
        ) : 180 - contador === 0 ? (
          <h2>Reunión Llena</h2>
        ) : (
          ""
        )}
      </h1>
      <br />
      <button className="btn btn-primary" onClick={suma}>
        Ver Cupos
      </button>
      <BootstrapTable id="d2" keyField="id" data={usuarios} columns={columns} />
      <button className="btn btn-primary mr-4" onClick={validation}>
        Obtener Lista
      </button>
      {isPastor ? (
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="btn btn-success"
          table="d2"
          filename="domingo-segunda-reunion"
          sheet="tablexls"
          buttonText="Descargar Excel"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default DomingoListSegunda;
