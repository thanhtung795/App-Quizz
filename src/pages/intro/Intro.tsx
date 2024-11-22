import { Col, Row, Container } from "react-bootstrap";
import "./style.css";

const Intro = () => {
  return (
    <div className="fullscreen-container">
      <div className="main-intro">
        <Container>
          <Row className="w-100">
            <Col md={6} sm={12}>
              <div className="question-detail">
                <h2 className="question-title">
                  Lịch sử của sự nghiệp tôn giáo theo lịch sử của các pháp đạo
                  của phương Tây Bắc. Lịch sử của sự nghiệp tôn giáo theo lịch
                  sử của các pháp đạo của phương Tây Bắc. Lịch sử của sự nghiệp
                  tôn giáo theo lịch sử của các pháp đạo của phương Tây Bắc.
                  Lịch sử của sự nghiệp tôn giáo theo lịch sử của các pháp đạo
                  của phương Tây Bắc. Lịch sử của sự nghiệp tôn giáo theo lịch
                  sử của các pháp đạo của phương Tây Bắc. Lịch sử của sự nghiệp
                  tôn giáo theo lịch sử của các pháp đạo của phương Tây Bắc.
                  Lịch sử của sự nghiệp tôn giáo theo lịch sử của các pháp đạo
                  của phương Tây Bắc. Lịch sử của sự nghiệp tôn giáo theo lịch
                  sử của các pháp đạo của phương Tây Bắc.
                </h2>
              </div>
            </Col>

            <Col md={6} sm={12}>
              <div className="button-Answer">
                <button
                  style={{ backgroundColor: "#ffc233" }}
                  className="answer-btn"
                >
                  h sử của các pháp đạo của phương Tây Bắc. Lịch sử của sự
                  nghiệp tôn giáo theo lịch sử của các pháp đạo của phương Tây
                  Bắc. Lịch sử của sự nghiệp tôn giáo theo lịch sử của các pháp
                  đạo của phương Tây Bắc. Lịch sử của sự nghiệp tôn giáo theo
                  lịch sử của các pháp đạo của phương Tây Bắc. Lịch sử của sự
                  nghiệp tôn giáo theo lịch sử của các pháp đạo của phương Tây
                  Bắc.
                </button>
                <button
                  style={{ backgroundColor: "#a6d72e" }}
                  className="answer-btn"
                >
                  Đáp án 2
                </button>
                <button
                  style={{ backgroundColor: "#53c7db" }}
                  className="answer-btn"
                >
                  Đáp án 3
                </button>
                <button style={{backgroundColor:"#3182ce"}} className="answer-btn">Đáp án 4</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
