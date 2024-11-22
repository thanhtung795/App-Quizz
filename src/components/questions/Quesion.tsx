import QuessionCard from "./QuessionCard";
import { Link } from "react-router-dom";
import { Quetions } from "../../data/Quetions";
const Quessions = () => {
  return (
    <div className="container mt-2">
      <div className="row g-3 ">
        {/* Hiển thị danh sách câu hỏi */}
        {Quetions.map((question) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
            <Link to={`/detail/${question.id}`} key={question.id}>
              <QuessionCard
                image={question.image} 
                title={question.title}
                description={question.description}
                category={question.category}
                author={question.author}
                date={question.date}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quessions;
