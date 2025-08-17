import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const announcements = [
    { title: "주일예배 안내", content: "매주 일요일 오전 10시 30분", date: "2024.11.17" },
    { title: "수요예배 안내", content: "매주 수요일 오후 7시 30분", date: "2024.11.17" },
    { title: "청년부 모임", content: "매주 토요일 오후 7시", date: "2024.11.16" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            <Link to="/service-info" className="btn btn-primary">
              <span className="btn-icon">🙏</span>
              예배 안내
            </Link>
            <Link to="/announcement" className="btn btn-secondary">
              <span className="btn-icon">📢</span>
              공지사항
            </Link>
            <button 
              className="btn btn-outline" 
              onClick={() => scrollToSection('quick-info')}
            >
              <span className="btn-icon">⬇️</span>
              더 알아보기
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">🏛️</div>
        </div>
      </section>

      {/* Quick Announcements Slider */}
      <section className="announcements-slider" id="announcements">
        <div className="container">
          <div className="slider-container">
            <div className="slide-wrapper" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
              {announcements.map((announcement, index) => (
                <div key={index} className="slide">
                  <div className="announcement-card">
                    <h3>{announcement.title}</h3>
                    <p>{announcement.content}</p>
                    <span className="date">{announcement.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-dots">
              {announcements.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="section about-preview">
        <div className="container">
          <h2 className="section-title">환영합니다</h2>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="quick-info" id="quick-info">
        <div className="container">
          <div className="quick-info-grid">
            <div className="info-card hover-effect" onClick={() => window.location.href = '/service-info'}>
              <div className="info-icon">⏰</div>
              <h3>예배 시간</h3>
              <p>주일 오전 10:30</p>
              <p>수요 오후 7:30</p>
              <span className="more-info">자세히 보기 →</span>
            </div>
            <div className="info-card hover-effect" onClick={() => window.location.href = '/location'}>
              <div className="info-icon">📍</div>
              <h3>오시는 길</h3>
              <p>대구광역시 동구</p>
              <p>동도로 123번길</p>
              <span className="more-info">위치 확인 →</span>
            </div>
            <div className="info-card hover-effect" onClick={() => window.location.href = '/ministers'}>
              <div className="info-icon">👨‍💼</div>
              <h3>담임목사</h3>
              <p>최일광 목사</p>
              <p>하나님의 사랑 전파</p>
              <span className="more-info">인사말 →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>교회 소개</h2>
          <div className="features-grid">
            <div className="feature-card hover-lift">
              <div className="feature-icon">🙏</div>
              <h3>예배와 기도</h3>
              <p>하나님께 드리는 진실한 예배와 기도의 시간을 통해 영적 성장을 도모합니다.</p>
              <Link to="/service-info" className="feature-link">예배 안내 →</Link>
            </div>
            <div className="feature-card hover-lift">
              <div className="feature-icon">❤️</div>
              <h3>사랑과 섬김</h3>
              <p>서로 사랑하고 섬기며, 지역사회와 함께하는 교회가 되고자 합니다.</p>
              <Link to="/philosophy" className="feature-link">목회철학 →</Link>
            </div>
            <div className="feature-card hover-lift">
              <div className="feature-icon">📖</div>
              <h3>말씀과 교육</h3>
              <p>하나님의 말씀을 배우고 실천하며, 다음 세대를 위한 교육에 힘쓰고 있습니다.</p>
              <Link to="/sunday-sermon" className="feature-link">설교 말씀 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="latest-updates">
        <div className="container">
          <h2>최근 소식</h2>
          <div className="updates-grid">
            <div className="update-card">
              <div className="update-date">2024.11.17</div>
              <h3>주일 설교</h3>
              <p>"하나님의 사랑으로 하나 되는 공동체" - 요한복음 17:20-23</p>
              <Link to="/sunday-sermon" className="update-link">설교 듣기 →</Link>
            </div>
            <div className="update-card">
              <div className="update-date">2024.11.15</div>
              <h3>교회 소식</h3>
              <p>청년부 수련회가 11월 23-24일 진행됩니다.</p>
              <Link to="/church-news" className="update-link">자세히 보기 →</Link>
            </div>
            <div className="update-card">
              <div className="update-date">2024.11.10</div>
              <h3>사진 앨범</h3>
              <p>교회 창립 1주년 기념 행사 사진이 업데이트되었습니다.</p>
              <Link to="/photo-album" className="update-link">사진 보기 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>함께 예배하며 성장해요</h2>
            <p>대구동도교회에서 하나님의 사랑을 경험하고 믿음의 공동체와 함께 성장하세요.</p>
            <div className="cta-buttons">
              <Link to="/location" className="btn btn-primary btn-large">
                <span className="btn-icon">📍</span>
                교회 위치 보기
              </Link>
              <Link to="/greeting" className="btn btn-outline btn-large">
                <span className="btn-icon">👋</span>
                목사님 인사말
              </Link>
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
