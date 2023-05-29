import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick } = useBebidas();
  return (
    <Col md={6} lg={4} key={bebida.idDrink}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Card.Text>{bebida.strInstructions}</Card.Text>
          <Button
            variant={"warning"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleModalClick();
            }}
          >
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
