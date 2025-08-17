import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>소개 및 연혁</h1>
          <p>하나님의 사랑으로 하나 되는 공동체, 대구동도교회입니다</p>
        </div>
      </section>

      {/* 인사말 */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>인사말</h2>
              <p>
                사랑하는 성도 여러분, 대구동도교회 홈페이지를 방문해 주셔서 감사합니다.
              </p>
              <p>
                저희 대구동도교회는 하나님의 말씀을 중심으로 한 건강한 신앙 공동체를 
                만들어가고 있습니다. 젊고 역동적인 교회로서 예수 그리스도의 사랑 안에서 
                서로를 섬기며, 지역사회와 함께 성장하는 교회가 되고자 합니다.
              </p>
              <p>
                언제든지 저희 교회에 오셔서 하나님의 은혜를 함께 나누시기 바랍니다.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">⛪</div>
            </div>
          </div>
        </div>
      </section>

      {/* 목회철학 */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">목회철학</h2>
          <div className="grid grid-2">
            <div className="value-card">
              <div className="value-icon">📖</div>
              <h3>말씀 중심</h3>
              <p>성경 말씀을 기반으로 한 건전한 신앙과 올바른 신학을 추구합니다</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>사랑의 실천</h3>
              <p>하나님의 사랑을 받은 자로서 이웃을 사랑하고 섬기는 삶을 살아갑니다</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>성장과 변화</h3>
              <p>개인과 공동체의 지속적인 성장과 변화를 통해 하나님 나라를 확장합니다</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>진실한 교제</h3>
              <p>투명하고 진실한 관계 속에서 서로를 격려하고 세워갑니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* 교회연혁 */}
      <section className="section history-section">
        <div className="container">
          <h2 className="section-title">교회 연혁</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024.01</div>
              <div className="timeline-content">
                <h4>대구동도교회 개척</h4>
                <p>하나님의 부르심으로 대구동도교회가 시작되었습니다</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024.03</div>
              <div className="timeline-content">
                <h4>첫 번째 세례식</h4>
                <p>새로운 가족들과 함께하는 첫 세례식을 진행했습니다</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024.06</div>
              <div className="timeline-content">
                <h4>청년부 창립</h4>
                <p>젊고 활기찬 청년부가 정식으로 창립되었습니다</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2024.09</div>
              <div className="timeline-content">
                <h4>지역사회 봉사</h4>
                <p>지역사회와 함께하는 첫 번째 봉사활동을 시작했습니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 오시는길 */}
      <section className="section contact-section">
        <div className="container">
          <h2 className="section-title">오시는길</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3>📍 주소</h3>
                <p>대구광역시 동구 동대구로 123<br />대구동도교회</p>
              </div>
              <div className="info-card">
                <h3>📞 연락처</h3>
                <p>전화: 053-123-4567<br />팩스: 053-123-4568</p>
              </div>
              <div className="info-card">
                <h3>🚌 대중교통</h3>
                <p>지하철 1호선 동대구역 3번 출구<br />버스 101, 102, 103번</p>
              </div>
              <div className="info-card">
                <h3>🚗 자가용</h3>
                <p>동대구IC에서 10분<br />교회 주차장 이용 가능</p>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>지도가 여기에 표시됩니다</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
