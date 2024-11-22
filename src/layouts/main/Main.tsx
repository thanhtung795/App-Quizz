import { Row } from "antd";
import Bamner from "../../components/bamner/Bamner";
import Quessions from "../../components/questions/Quesion";
const Main = () => {
  return (
    <div className="mt-4">
      <Bamner />
      {/* Add other components here */}
      <Row className="mt-4 container">
        <h1 className="text-start title-parent ">Chủ để được yêu thích nhất</h1>
          <Quessions />
      </Row>
    </div>
  );
};

export default Main;
