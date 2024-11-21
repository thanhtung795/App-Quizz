import { useState, useEffect } from "react"; // Import useState và useEffect hook
import { Button, Menu, Drawer } from "antd"; // Import các component cần thiết
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons"; // Các icons cần thiết
import Sider from "antd/es/layout/Sider"; // Import Sider
import { Link } from "react-router-dom";
import { ISider } from "../../types/SIder";

const SiderContent: React.FC<ISider> = ({isFixed}) => {
  // State cho việc collapse của Sider và Drawer
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false); // State cho Drawer visibility
  const [isMobile, setIsMobile] = useState(false); // Kiểm tra xem có phải là mobile hay không

  const linkItem = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/">Trang chủ</Link>, // Link to route1
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: <Link to="/about">Giới thiệu</Link>, // Link to route2
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: <Link to="/contact">Liên hệ</Link>, // Link to route3
    },
  ];

  // Hàm toggle Sider
  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  // Hàm toggle Drawer
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  // Kiểm tra kích thước màn hình và cập nhật isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Đặt ngưỡng màn hình mobile là 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Kiểm tra ngay khi component mount

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup khi component unmount
    };
  }, []);

  return (
    <div>
      {/* Nút thu vào/thu ra Sider */}
      {!isMobile && (
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleSider}
          style={{
            fontSize: "16px",
            width: 35,
            position: "fixed",
            top: "105px",
            left: collapsed ? "65px" : "200px", // Move button based on collapsed state
            zIndex: 999, // Ensure button is always on top
          }}
        />
      )}

      {/* Nếu là mobile, sử dụng Drawer, ngược lại sử dụng Sider */}
      {isMobile ? (
        // Mobile: Hiển thị Drawer khi mở menu
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={toggleDrawer}
          visible={visible} // Hiển thị Drawer khi visible là true
          width={200}
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={linkItem}
            style={{
              height: "100%",
              backgroundColor: "#f0f2f5",
            }}
          />
        </Drawer>
      ) : (
        // Desktop: Hiển thị Sider
        <Sider
          width={200}
          collapsed={collapsed} // Liên kết collapsed với state
          breakpoint="lg"
          collapsedWidth="70"
          style={{ backgroundColor: "white", marginTop: isFixed ? 105 : 0 }}
        >
          <Menu
            style={{
              backgroundColor: "#f0f2f5",
              width: collapsed ? "70px" : "200px",
              position: "fixed",
            }}
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            inlineCollapsed={collapsed}
            items={linkItem}
          />
        </Sider>
      )}

      {/* Nút để mở Drawer khi ở mobile, căn giữa */}
      {isMobile && (
        <Button
          type="text"
          icon={<MenuUnfoldOutlined />}
          onClick={toggleDrawer}
          style={{
            fontSize: "16px",
            width: 35,
            position: "fixed",
            top: "105px",
            left: "10px",
            zIndex: 999, // Đảm bảo nút luôn hiển thị trên cùng
          }}
        />
      )}
    </div>
  );
};

export default SiderContent;
