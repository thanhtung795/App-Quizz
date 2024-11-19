import { Button } from "antd";
import React from "react";
import { CarouselContentProps } from "../../../types/CarouselContent";

const CarouselContent: React.FC<CarouselContentProps> = ({
  title,
  description,
  buttonText,
  imgSrc,
}) => {
  return (
    <div className="content-carausel d-flex  align-items-center justify-content-between p-3">
      <div className="content-text-carausle d-flex flex-column align-items-start">
        <h1
          className="title-content"
          style={{
            maxWidth: "100%", // Không cho vượt quá chiều rộng container
            width: "100%", // Đảm bảo chiếm toàn bộ chiều rộng
            textAlign: "left",
          }}
        >
          {title}
        </h1>
        <p
          className="title-content w-75"
          style={{
            textAlign: "left",
          }}
        >
          {description}
        </p>

        <Button className="title-content">{buttonText}</Button>
      </div>
      <div
        className="content-img img-fluid"
        style={{ width: "300px", textAlign: "center" }}
      >
        <img src={imgSrc} className="w-100" alt="" />
      </div>
    </div>
  );
};

export default CarouselContent;
