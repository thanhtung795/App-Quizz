import { Menu, Drawer } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

// Import file CSS
import './Sider.css'

const SiderContent: React.FC = () => {
 

 

  return (
    <>
    

      {/* Drawer cho màn hình nhỏ */}
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        style={{ padding: 0 }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ borderRight: 0, backgroundColor: "#f0f0f0" }}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<InfoCircleOutlined />}>
            Giới thiệu
          </Menu.Item>
          <Menu.Item key="3" icon={<PhoneOutlined />}>
            Liên hệ
          </Menu.Item>
        </Menu>
      </Drawer>

      {/* Sider cho màn hình lớn */}
      <Menu
        className="sider" // Áp dụng class 'sider' từ CSS
        defaultSelectedKeys={["1"]}
        mode="inline"
        style={{
          borderRight: 0,
        }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Trang chủ
        </Menu.Item>
        <Menu.Item key="2" icon={<InfoCircleOutlined />}>
          Giới thiệu
        </Menu.Item>
        <Menu.Item key="3" icon={<PhoneOutlined />}>
          Liên hệ
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SiderContent;
