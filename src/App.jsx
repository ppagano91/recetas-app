import { useState } from "react";
import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriaProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";

function App() {
  return (
    <BebidasProvider>
      <CategoriasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
        </Container>
      </CategoriasProvider>
    </BebidasProvider>
  );
}

export default App;
