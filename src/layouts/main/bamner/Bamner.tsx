import { Carousel } from "antd";
import "./Bamner.css";
import CarouselContent from "./CarouselContent";
import imgBamner1 from "../../../assets/imgBamner1.png";
import imgBamner2 from "../../../assets/imgBamner2.png";
import imgBamner3 from "../../../assets/imgBamner3.png";
import imgBamner4 from "../../../assets/imgBamner4.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  draggable: true, // Bật tính năng kéo
};

const contentStyle: React.CSSProperties = {
  height: "300px",
  color: "#fff",
  borderRadius: "20px",
};

const Bamner: React.FC = () => {
  return (
    <div className="container-fluid">
      <Carousel {...settings}>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                "linear-gradient(135deg, #FEB692 0%, #EA5455 100%)",
            }}
          >
            <CarouselContent
              title="Thử thách trí tuệ mỗi ngày"
              description="Khám phá hàng trăm câu hỏi thú vị từ nhiều lĩnh vực như khoa học, lịch sử, và công nghệ."
              buttonText="Khám phá ngay"
              imgSrc={imgBamner1}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                "linear-gradient(135deg, #009688 0%, #64D8CB 100%)",
            }}
          >
            <CarouselContent
              title="Đánh giá bản thân"
              description="Bạn có biết điểm mạnh và điểm yếu của mình trong các lĩnh vực? Hãy làm bài quiz để có thể nhìn nhận lại bản thân và biết thêm về khả năng của mình. Cũng như biết thêm về các lĩnh vực khác nhau"
              buttonText="Làm bài Quiz"
              imgSrc={imgBamner2}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                "linear-gradient(135deg, #FF69B4 0%, #FFB6C1 100%)",
            }}
          >
            <CarouselContent
              title="Tham gia bảng xếp hạng"
              description="So tài với bạn bè và những người khác trên toàn thế giới. Ai sẽ đứng đầu bảng xếp hạng tuần này?"
              buttonText="Thử thách ngay"
              imgSrc={imgBamner3}
            />
          </div>
        </div>
        <div>
          <div
            style={{
              ...contentStyle,
              backgroundImage:
                "linear-gradient(135deg, #00BFFF 0%, #4682B4 100%)",
            }}
          >
            <CarouselContent
              title="Học và chơi cùng Quiz"
              description="Vừa học vừa giải trí với các câu đố vui, phù hợp cho mọi lứa tuổi. Khám phá ngay để thử sức và nhận ra tiềm năng của bản thân!"
              buttonText="Xem thêm"
              imgSrc={imgBamner4}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Bamner;
