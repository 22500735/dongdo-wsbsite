import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <h2>대구동도교회</h2>
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
                <Link to="/greeting" onClick={closeMenu}>인사말</Link>
                <Link to="/philosophy" onClick={closeMenu}>목회철학</Link>
                <Link to="/history" onClick={closeMenu}>교회연혁</Link>
                <Link to="/location" onClick={closeMenu}>오시는길</Link>
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
                <Link to="/service-info" onClick={closeMenu}>예배 안내</Link>
                <Link to="/offering" onClick={closeMenu}>헌금 안내</Link>
                <Link to="/ministers" onClick={closeMenu}>섬기는 사람들</Link>
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
                <Link to="/sunday-sermon" onClick={closeMenu}>주일 설교</Link>
                <Link to="/wednesday-sermon" onClick={closeMenu}>수요 설교</Link>
                <Link to="/praise" onClick={closeMenu}>찬양</Link>
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
                <Link to="/infant" onClick={closeMenu}>영유부</Link>
                <Link to="/elementary" onClick={closeMenu}>유초등부</Link>
                <Link to="/youth" onClick={closeMenu}>중고등부</Link>
                <Link to="/young-adult" onClick={closeMenu}>청년부</Link>
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
                <Link to="/announcement" onClick={closeMenu}>공지</Link>
                <Link to="/church-news" onClick={closeMenu}>교회 소식</Link>
                <Link to="/member-news" onClick={closeMenu}>교우 동정</Link>
                <Link to="/pastoral-column" onClick={closeMenu}>목회 칼럼</Link>
                <Link to="/photo-album" onClick={closeMenu}>사진 앨범</Link>
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
      </div>
    </header>
  );
};

export default Header;
