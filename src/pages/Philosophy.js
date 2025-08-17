import React from 'react';
import './PageStyles.css';

const Philosophy = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>목회철학</h1>
          <p>대구동도교회의 목회 방향과 신앙 철학을 소개합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>📖 말씀 중심의 목회</h3>
              <p>
                성경 말씀을 모든 사역과 결정의 기준으로 삼습니다. 
                하나님의 말씀이 우리 삶의 등불이 되고 발의 빛이 되어 
                올바른 신앙의 길로 인도받기를 원합니다.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>🙏 기도하는 교회</h3>
              <p>
                모든 일에 기도로 시작하고 기도로 마칩니다. 
                개인의 기도생활뿐만 아니라 공동체가 함께 드리는 기도를 통해 
                하나님의 뜻을 구하고 순종하는 교회가 되고자 합니다.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>❤️ 사랑의 공동체</h3>
              <p>
                하나님의 사랑을 받은 자로서 서로 사랑하고 섬기는 공동체입니다. 
                나이와 배경을 초월하여 모든 성도가 가족처럼 따뜻한 교제를 나누며 
                서로를 격려하고 세워갑니다.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>🌱 성장하는 교회</h3>
              <p>
                개인의 영적 성장과 교회 공동체의 성장을 추구합니다. 
                말씀과 기도를 통해 그리스도의 장성한 분량까지 자라가며, 
                양적 성장과 질적 성장의 균형을 이루어갑니다.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>🌍 선교하는 교회</h3>
              <p>
                복음을 전하는 것이 교회의 사명임을 믿습니다. 
                지역사회부터 시작하여 민족과 열방에 이르기까지 
                하나님의 사랑과 구원의 소식을 전하는 교회가 되겠습니다.
              </p>
            </div>

            <div className="philosophy-item">
              <h3>🤝 섬기는 교회</h3>
              <p>
                예수님께서 섬기러 오신 것처럼 우리도 섬기는 교회가 되고자 합니다. 
                교회 내에서뿐만 아니라 지역사회의 소외된 이웃들을 돌보며 
                실천하는 신앙을 보여드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <h2 className="section-title">교회 표어</h2>
          <div className="text-center">
            <h3 style={{fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '30px'}}>
              "하나님의 사랑으로 하나 되는 공동체"
            </h3>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto'}}>
              우리는 하나님의 무조건적인 사랑을 경험한 자들로서, 
              그 사랑 안에서 하나 되어 서로를 섬기고 돌보는 아름다운 공동체를 만들어갑니다. 
              다양한 배경과 연령의 성도들이 그리스도 안에서 한 가족이 되어 
              함께 성장하고 함께 기뻐하는 교회입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philosophy;
