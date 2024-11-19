// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes"; // Import danh sách route từ routes.ts
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderContent from "./layouts/header/HeaderContent";
import { contentStyle, footerStyle, headerStyle, layoutStyle } from "./style";
import FooterContent from "./layouts/footer/Footer";
import Sider from "antd/es/layout/Sider";
import SiderContent from "./layouts/sider/Sider";

function App() {
  return (
    <Router>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <HeaderContent />
        </Header>
        <Layout style={{ display: "flex" }}>
          <Sider
            width={200}
            breakpoint="lg" // Khi màn hình nhỏ hơn breakpoint này, Sider sẽ tự động ẩn
            collapsedWidth="0" // Khi thu nhỏ, Sider sẽ thu hẹp
            style={{ marginTop: "140px", backgroundColor: "#f0f0f0" }}
          >
            <SiderContent /> {/* Sử dụng SiderContent trong Sider */}
          </Sider>
          <Content style={contentStyle}>
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />} // Render component cho mỗi route
                />
              ))}
            </Routes>
          </Content>
        </Layout>
        <Footer style={footerStyle}>
          <FooterContent />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
