import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-icon">⛪</span>
          <span className="logo-text">
            <span className="logo-main">대구동도교회</span>
            <span className="logo-sub">Daegu Dongdo Church</span>
          </span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            onClick={closeMenu}
          >
            홈
          </Link>
          
          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('about')}
            >
              소개 및 연혁 ▼
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'about' ? 'show' : ''}`}>
              <Link to="/greeting" className="dropdown-item">
                <span className="item-icon">👋</span>
                인사말
              </Link>
              <Link to="/philosophy" className="dropdown-item">
                <span className="item-icon">💭</span>
                목회철학
              </Link>
              <Link to="/history" className="dropdown-item">
                <span className="item-icon">📜</span>
                교회연혁
              </Link>
              <Link to="/location" className="dropdown-item">
                <span className="item-icon">📍</span>
                오시는길
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('service')}
            >
              예배 안내 ▼
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'service' ? 'show' : ''}`}>
              <Link to="/service-info" className="dropdown-item">
                <span className="item-icon">🙏</span>
                예배 안내
              </Link>
              <Link to="/offering" className="dropdown-item">
                <span className="item-icon">💝</span>
                헌금 안내
              </Link>
              <Link to="/ministers" className="dropdown-item">
                <span className="item-icon">👥</span>
                섬기는 사람들
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('word')}
            >
              말씀 및 찬양 ▼
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'word' ? 'show' : ''}`}>
              <Link to="/sunday-sermon" className="dropdown-item">
                <span className="item-icon">📖</span>
                주일 설교
              </Link>
              <Link to="/wednesday-sermon" className="dropdown-item">
                <span className="item-icon">📚</span>
                수요 설교
              </Link>
              <Link to="/praise" className="dropdown-item">
                <span className="item-icon">🎵</span>
                찬양
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('generation')}
            >
              다음 세대 ▼
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'generation' ? 'show' : ''}`}>
              <Link to="/infant" className="dropdown-item">
                <span className="item-icon">👶</span>
                영유부
              </Link>
              <Link to="/elementary" className="dropdown-item">
                <span className="item-icon">🧒</span>
                유초등부
              </Link>
              <Link to="/youth" className="dropdown-item">
                <span className="item-icon">👦</span>
                중고등부
              </Link>
              <Link to="/young-adult" className="dropdown-item">
                <span className="item-icon">👨</span>
                청년부
              </Link>
            </div>
          </div>

          <div className="dropdown">
            <button 
              className="dropdown-toggle"
              onClick={() => toggleDropdown('notice')}
            >
              알림 및 나눔 ▼
            </button>
            <div className={`dropdown-menu ${activeDropdown === 'notice' ? 'show' : ''}`}>
              <Link to="/announcement" className="dropdown-item">
                <span className="item-icon">📢</span>
                공지
              </Link>
              <Link to="/church-news" className="dropdown-item">
                <span className="item-icon">📰</span>
                교회 소식
              </Link>
              <Link to="/member-news" className="dropdown-item">
                <span className="item-icon">💌</span>
                교우 동정
              </Link>
              <Link to="/pastoral-column" className="dropdown-item">
                <span className="item-icon">✍️</span>
                목회 칼럼
              </Link>
              <Link to="/photo-album" className="dropdown-item">
                <span className="item-icon">📸</span>
                사진 앨범
              </Link>
            </div>
          </div>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="메뉴 토글"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
