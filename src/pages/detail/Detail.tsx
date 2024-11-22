import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import RelatedQuestionsCard from "../../components/detail/RelatedQuestionsCard ";
import { RelatedQuestions } from "../../data/relatedQuestions";
import { Quetions } from "../../data/Quetions";
import { RelatedQuestionsCardProps } from "../../types/CategoryQuestion";

const Detail = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const question = Quetions.find((q) => q.id === parseInt(id!)); // Tìm câu hỏi theo id

  // Sử dụng useEffect để cuộn lên đầu khi component được hiển thị
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, [id]); // Mỗi khi id thay đổi, cuộn lên đầu

  if (!question) {
    return <div>Không tìm thấy câu hỏi</div>;
  }
  return (
    <div className="container">
      <Row className="p-3 text-start">
        {/* Phần nội dung chính */}
        <Col xs={12} md={8}>
          <h3 className="mb-3">{question.title}</h3>
          <p>{question.description}</p>
          <p>
            <strong>Độ khó:</strong> {question.difficulty}
          </p>
          <p>
            <strong>Loại câu hỏi:</strong> Trắc nghiệm
          </p>
          <p>
            <strong>Điểm số:</strong> {question.score}
          </p>
          <p>
            <strong>Điểm số mỗi câu:</strong> {question.scorePerQuestion}
          </p>
          <p>
            <strong>Số lượng câu hỏi:</strong> {question.numQuestions}
          </p>
          <p>
            <strong>Thời gian làm bài:</strong> {question.duration}
          </p>
        </Col>

        {/* Phần hình ảnh và các nút */}
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center align-items-md-start "
        >
          <div className="img-detail mb-3" style={{ width: "100%" }}>
            <img
              src={question.image}
              className="img-fluid w-100 rounded"
              alt="Hình ảnh liên quan"
            />
          </div>
          <div className="category-question w-100">
            <h1 className="text-center">Lịch sử</h1>
          </div>
          <div
            className="btn-start mt-2 d-flex justify-content-center align-items-center"
            style={{ width: "100%" }}
          >
            <button className="btn btn-primary mb-2">
              <Link className="text-white" to="/intro">
                Bắt đầu làm bài
              </Link>
            </button>
          </div>
        </Col>
      </Row>

      {/* Danh sách câu hỏi liên quan */}
      <Row className="mt-4 border-top">
        <div className="h4 pb-2 mb-4 text-primary border-bottom border-primary text-start">
          Thể loại cũng câu hỏi liên quan
        </div>
        {RelatedQuestions.map((question: RelatedQuestionsCardProps) => (
          <RelatedQuestionsCard
            image={question.image}
            title={question.title}
            author={question.author}
            date={question.date}
          />
        ))}
      </Row>
    </div>
  );
};

export default Detail;
