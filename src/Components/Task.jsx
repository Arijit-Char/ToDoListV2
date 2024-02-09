import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Task(props) {
  return (
    <div>
      <Card
        style={{
          width: "25vw",
          display: "flex",
          flexDirection: "column", 
          borderRadius: "0.5rem",
          margin: "20px",
          backgroundColor: "#6E75A8",
          color: "white",
          maxHeight: "300px", 
          overflow: "hidden",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "35px",
            overflowY: "auto", 
          }}
        >
          <Card.Title style={{ marginBottom: "10px" }}>
            {props.title}
          </Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button
            variant="primary"
            style={{ backgroundColor: "#3E1929", border: "black" }}
            onClick={() => {
                props.deleteItem(props.index)
                console.log(props);
            }}
          >
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
