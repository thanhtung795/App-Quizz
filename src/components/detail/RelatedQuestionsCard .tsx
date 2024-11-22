import React from "react";
import { Row, Col } from "react-bootstrap";
import { RelatedQuestionsCardProps } from "../../types/CategoryQuestion";
import "./style.css";

const RelatedQuestionsCard: React.FC<RelatedQuestionsCardProps> = ({
  image,
  title,
  author,
  date,
}) => {
  
  return (
    <div className="related-question-card mb-3 p-2 border rounded">
      <Row className="align-items-center">
        {/* Cột hình ảnh */}
        <Col xs={3} md={2} className="d-flex justify-content-center">
          <img
            src={image}
            alt="related-question"
            style={{
              width: "100%",
              maxWidth: "200px",
              height: "100px",
              objectFit: "cover",
            }}
            className="rounded"
          />
        </Col>

        {/* Cột thông tin */}
        <Col xs={9} md={10}>
          <h6 className="mb-1 text-truncate text-start">{title}</h6>
          <p className="mb-0 text-muted text-start">
            <small>Người đăng: {author}</small>
          </p>
          <p className="mb-0 text-muted text-start">
            <small>Ngày đăng: {date}</small>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default RelatedQuestionsCard;
