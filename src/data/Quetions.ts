import imgListSu from "../assets/ai la nguoi sang lap nha nguyen.jpg";
import imgToanHoc from "../assets/toanhoc.jpg";
import imgDiaLi from "../assets/thudocuauc.jpg";
import imgVanHoc from "../assets/truyenkieu.png";

export const Quetions = [
  {
    id: 1,
    category: "Lịch sử",
    title: "Ai là người sáng lập nhà Nguyễn?",
    description:
      "Nhà Nguyễn là triều đại cuối cùng trong lịch sử phong kiến Việt Nam, kéo dài từ năm 1802 đến 1945. Ai là người đã thống nhất đất nước và đặt nền móng cho triều đại này? Câu hỏi này giúp bạn tìm hiểu về các nhân vật lịch sử quan trọng và vai trò của họ trong việc xây dựng đất nước.",
    image: imgListSu, // Đường dẫn đến ảnh minh họa lịch sử
    author: "Admin",
    date: "2024-11-21",
    difficulty: "Trung bình", // Độ khó
    duration: "30 phút", // Thời gian làm bài
    numQuestions: 10, // Số lượng câu hỏi
    score: 10, // Điểm số
    scorePerQuestion: 1, // Điểm mỗi câu
  },
  {
    id: 2,
    category: "Toán học",
    title: "Kết quả của phép tính 12 × 8 là gì?",
    description:
      "Toán học luôn là nền tảng của nhiều ngành khoa học. Phép nhân là một kỹ năng cơ bản nhưng rất cần thiết. Với câu hỏi này, bạn sẽ kiểm tra khả năng tính toán cơ bản của mình và sự chính xác khi xử lý các con số. Liệu bạn có trả lời đúng và nhanh chóng không?",
    image: imgToanHoc, // Đường dẫn đến ảnh minh họa toán học
    author: "Admin",
    date: "2024-11-21",
    difficulty: "Dễ", // Độ khó
    duration: "15 phút", // Thời gian làm bài
    numQuestions: 5, // Số lượng câu hỏi
    score: 5, // Điểm số
    scorePerQuestion: 1, // Điểm mỗi câu
  },
  {
    id: 3,
    category: "Địa lý",
    title: "Thủ đô của Úc là gì?",
    description:
      "Địa lý không chỉ là môn học giúp bạn khám phá các vùng đất, mà còn giúp hiểu hơn về các quốc gia và văn hóa trên thế giới. Câu hỏi này kiểm tra kiến thức của bạn về thủ đô của Úc - một quốc gia nằm ở Nam Bán cầu, nổi tiếng với phong cảnh thiên nhiên và văn hóa đa dạng.",
    image: imgDiaLi, // Đường dẫn đến ảnh minh họa địa lý
    author: "Admin",
    date: "2024-11-21",
    difficulty: "Trung bình", // Độ khó
    duration: "20 phút", // Thời gian làm bài
    numQuestions: 5, // Số lượng câu hỏi
    score: 10, // Điểm số
    scorePerQuestion: 2, // Điểm mỗi câu
  },
  {
    id: 4,
    category: "Văn học",
    title: "Tác giả của tác phẩm 'Truyện Kiều' là ai?",
    description:
      "'Truyện Kiều' là một kiệt tác văn học Việt Nam, không chỉ nổi tiếng trong nước mà còn được quốc tế đánh giá cao. Tác phẩm này chứa đựng những bài học sâu sắc về đạo đức, tình yêu, và số phận con người. Câu hỏi này giúp bạn khám phá thêm về nhà thơ đã viết nên tác phẩm bất hủ này và vai trò của ông trong lịch sử văn học Việt Nam.",
    image: imgVanHoc, // Đường dẫn đến ảnh minh họa văn học
    author: "Admin",
    date: "2024-11-21",
    difficulty: "Khó", // Độ khó
    duration: "40 phút", // Thời gian làm bài
    numQuestions: 10, // Số lượng câu hỏi
    score: 20, // Điểm số
    scorePerQuestion: 2, // Điểm mỗi câu
  },
];
