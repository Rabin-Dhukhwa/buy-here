import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card
      className="my-3 p-3 rounded shadow-lg"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card.Title as="div" className="product-title ">
            <h4>{product.name}</h4>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h4">${product.price}</Card.Text>

        {/* Add any other content you want in the body */}
      </Card.Body>
    </Card>
  );
};

export default Product;
