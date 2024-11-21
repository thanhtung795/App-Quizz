import { Container, Navbar } from "react-bootstrap";
import LogoQuiz from "../../assets/logoQuiz.png";
import { Button } from "antd";
import { Input } from "antd"; // Sử dụng Input của Ant Design để tạo ô tìm kiếm

const HeaderContent = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ padding: "10px 0" }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Phần logo */}
        <Navbar.Brand href="/" style={{ width: "100px" }}>
          <img src={LogoQuiz} className="w-100" alt="Logo Quiz" />
        </Navbar.Brand>

        {/* Phần tìm kiếm */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            borderRadius: "20px !important",
          }}
        >
          {/* Ô tìm kiếm ở dưới logo */}
          <Input.Search
            placeholder="Tìm kiếm"
            allowClear
            style={{ width: "80%", marginTop: "10px" }}
          />
        </div>

        {/* Phần đăng ký và đăng nhập */}
        <div
          style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
        >
          <Button
            type="default"
            className="fs-6"
            size="large"
            style={{ marginRight: "10px" }}
          >
            Đăng ký
          </Button>
          <Button type="primary" className="fs-6" size="large">
            Đăng nhập
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default HeaderContent;
