import "./Footer.css";

function HeaderAndFooterExample() {
  return (
    <div className="container-fiuld footer">
      <div className="footer-backgroup">
        <div className="footer-content d-flex justify-content-around align-items-center">
          <div className="footer-item">
            <h4 className="title-list-Groupp">Liên hệ</h4>
            <ul className="list-Group-footer">
              <li>Email: lienhe@example.com</li>
              <li>Số điện thoại: 0123 456 789</li>
              <li>Địa chỉ: 123 Đường ABC, Thành phố XYZ</li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="title-list-Groupp">Cộng tác</h4>
            <ul className="list-Group-footer">
              <li>Trở thành đối tác</li>
              <li>Hợp tác truyền thông</li>
              <li>Quảng cáo trên nền tảng</li>
              <li>Tài trợ sự kiện</li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="title-list-Groupp">Giới thiệu</h4>
            <ul className="list-Group-footer">
              <li>Về chúng tôi</li>
              <li>Lịch sử phát triển</li>
              <li>Sứ mệnh & tầm nhìn</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          <div className="footer-item">
            <h4 className="title-list-Groupp">Mạng xã hội</h4>
            <ul className="list-Group-footer">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAndFooterExample;
