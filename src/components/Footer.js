import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>대구동도교회</h3>
            <p>하나님의 사랑으로 하나 되는 공동체</p>
            <div className="contact-info">
              <p>📍 대구광역시 동구 동대구로 123</p>
              <p>📞 053-123-4567</p>
              <p>✉️ info@daegudongdo.org</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>예배시간</h4>
            <div className="service-times">
              <p>주일 1부 예배: 오전 9:00</p>
              <p>주일 2부 예배: 오전 11:00</p>
              <p>수요 예배: 오후 7:30</p>
              <p>금요 기도회: 오후 7:30</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>소셜미디어</h4>
            <div className="social-links">
              <a href="#" aria-label="페이스북">📘</a>
              <a href="#" aria-label="인스타그램">📷</a>
              <a href="#" aria-label="유튜브">📺</a>
              <a href="#" aria-label="카카오톡">💬</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 대구동도교회. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
