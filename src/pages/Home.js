import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            하나님의 사랑으로<br />
            <span className="highlight">하나 되는 공동체</span>
          </h1>
          <p className="hero-subtitle">
            대구동도교회는 젊고 활기찬 신앙 공동체로서<br />
            하나님의 말씀과 사랑을 나누며 함께 성장해 나갑니다
          </p>
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">교회 소개</a>
            <a href="#service" className="btn btn-outline">예배 안내</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">🏛️</div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="section about-preview">
        <div className="container">
          <h2 className="section-title">환영합니다</h2>
          <p className="section-subtitle">
            대구동도교회는 2024년 새롭게 시작하는 젊고 역동적인 교회입니다
          </p>
          <div className="grid grid-3">
            <div className="card">
              <div className="card-icon">💒</div>
              <h3>예배</h3>
              <p>하나님께 드리는 진실한 예배를 통해 은혜를 경험하세요</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>교제</h3>
              <p>따뜻한 사랑과 진실한 교제로 함께 성장해 나가요</p>
            </div>
            <div className="card">
              <div className="card-icon">📖</div>
              <h3>말씀</h3>
              <p>하나님의 말씀을 통해 삶의 방향과 지혜를 얻어가세요</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section id="service" className="section service-times">
        <div className="container">
          <h2 className="section-title">예배 안내</h2>
          <div className="grid grid-2">
            <div className="service-card">
              <h3>주일 예배</h3>
              <div className="service-info">
                <div className="service-item">
                  <span className="time">오전 9:00</span>
                  <span className="name">1부 예배</span>
                </div>
                <div className="service-item">
                  <span className="time">오전 11:00</span>
                  <span className="name">2부 예배</span>
                </div>
              </div>
            </div>
            <div className="service-card">
              <h3>평일 예배</h3>
              <div className="service-info">
                <div className="service-item">
                  <span className="time">오후 7:30</span>
                  <span className="name">수요 예배</span>
                </div>
                <div className="service-item">
                  <span className="time">오후 7:30</span>
                  <span className="name">금요 기도회</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section community-preview">
        <div className="container">
          <h2 className="section-title">함께하는 공동체</h2>
          <p className="section-subtitle">
            다양한 모임과 활동을 통해 신앙 안에서 깊은 교제를 나누어요
          </p>
          <div className="grid grid-3">
            <div className="community-card">
              <div className="community-icon">👥</div>
              <h4>청년부</h4>
              <p>20-30대 청년들의 활기찬 신앙 공동체</p>
            </div>
            <div className="community-card">
              <div className="community-icon">👨‍👩‍👧‍👦</div>
              <h4>가정부</h4>
              <p>가정을 이루신 분들의 따뜻한 교제</p>
            </div>
            <div className="community-card">
              <div className="community-icon">🎵</div>
              <h4>찬양팀</h4>
              <p>음악으로 하나님께 영광 돌리는 사역</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>함께 예배하며 성장해요</h2>
            <p>대구동도교회에서 여러분을 기다리고 있습니다</p>
            <a href="/contact" className="btn btn-primary">오시는 길 보기</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
