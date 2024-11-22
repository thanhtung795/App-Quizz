import React from "react";
import Card from "react-bootstrap/Card";
import './css/ProductCard.css';
import { QuessionCardProps } from "../../types/QuessionCard";
const QuessionCard: React.FC<QuessionCardProps> = ({
  image,
  title,
  description,
  category,
  author,
  date,
}) => {
  return (
    <Card>
      <Card.Img variant="top" height={250} src={image} />
      <Card.Body>
        <Card.Title className="text-start text-content-product text-title">{title}</Card.Title>
        <Card.Text className="text-start text-content-product text-description">{description}</Card.Text>
        <Card.Text className="text-start text-content-product">{category}</Card.Text>
        <Card.Text className="text-start text-content-product d-flex justify-content-between">
          <span>{author}</span> - <span>{date}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default QuessionCard;
