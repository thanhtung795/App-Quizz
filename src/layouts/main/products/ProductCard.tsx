import React from "react";
import Card from "react-bootstrap/Card";
import { ProductCardProps } from "../../../types/ProductCard";
import './css/ProductCard.css';
const ProductCard: React.FC<ProductCardProps> = ({
  imgSrc,
  title,
  description,
  poster,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" height={250} src={imgSrc} />
      <Card.Body>
        <Card.Title className="text-start text-content-product">{title}</Card.Title>
        <Card.Text className="text-start text-content-product">{description}</Card.Text>
        <Card.Text className="text-start text-content-product d-flex justify-content-between">
          <span>{poster}</span> - <span>{new Date().toLocaleDateString()}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
