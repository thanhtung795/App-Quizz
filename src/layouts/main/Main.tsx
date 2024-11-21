import { Row } from "antd";
import Bamner from "./bamner/Bamner";
import Products from "./products/Products";
import './products/css/ProductCard.css';
const Main = () => {
  return (
    <div className="mt-4">
      <Bamner />
      {/* Add other components here */}
      <Row className="mt-4 container">
        <h1 className="text-start title-parent ">Chủ để được yêu thích nhất</h1>
        <Products />
      </Row>
      <Row className="mt-4 container">
        <h1 className="text-start title-parent ">Chủ để được yêu thích nhất</h1>
        <Products />
      </Row>
      <Row className="mt-4 container">
        <h1 className="text-start title-parent ">Chủ để được yêu thích nhất</h1>
        <Products />
      </Row>
    </div>
  );
};

export default Main;
