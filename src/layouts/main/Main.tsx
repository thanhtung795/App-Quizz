import { Row } from "antd";
import Bamner from "./bamner/Bamner";
import Products from "./products/Products";

const Main = () => {
  return (
    <div className="mt-4">
      <Bamner />
      {/* Add other components here */}
      <Row className="mt-4 container">
        <h1 className="text-start ">Chủ để được yêu thích nhất</h1>
        <Products />
      </Row>
      <Row className="mt-4 container">
        <h1 className="text-start ">Chủ để được yêu thích nhất</h1>
        <Products />
      </Row>
      <Row className="mt-4 container">
        <h1 className="text-start ">Chủ để được yêu thích nhất</h1>
        <Products />
      </Row>
    </div>
  );
};

export default Main;
