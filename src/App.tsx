// src/App.tsx
import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes"; // Import danh sách route từ routes.ts
import { Layout,  } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import HeaderContent from "./layouts/header/HeaderContent";
import { contentStyle, footerStyle, headerStyle, layoutStyle } from "./style";
import FooterContent from "./layouts/footer/Footer";
import SiderContent from "./layouts/sider/Sider";
import "./App.css";

function App() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height || 0;
      const isScrollTop = window.scrollY > headerHeight;
      setIsFixed(isScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <Layout  style={layoutStyle}>
        <Header  className={isFixed ? "position-fixed" : ""} style={headerStyle}>
          <HeaderContent />
        </Header>
        <Layout style={{ display: "flex" }}>  
            <SiderContent isFixed={isFixed} /> {/* Sử dụng SiderContent trong Sider */}
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
