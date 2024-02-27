import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.product.imageURL} />
          <Card.Body>
            <Card.Title>{this.props.product.productName}</Card.Title>
            <Card.Text>{this.props.product.description}</Card.Text>
            <Card.Title className="text-danger">
              {this.props.product.price} tnd
            </Card.Title>
            <div className="d-flex justify-content-between">
              <Button variant="primary">addToCard</Button>
              <Button variant="danger">buy again</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
