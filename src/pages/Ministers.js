import React from 'react';
import './PageStyles.css';

const Ministers = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>섬기는 사람들</h1>
          <p>대구동도교회를 섬기는 교역자와 봉사자들을 소개합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">교역자</h2>
          <div className="pastor-card">
            <div className="pastor-image">
              <div className="pastor-placeholder">👨‍💼</div>
            </div>
            <div className="pastor-info">
              <h3>최일광 목사</h3>
              <p className="pastor-title">담임목사</p>
              <p>
                하나님의 부르심에 순종하여 대구동도교회를 섬기고 있습니다. 
                젊은 세대와 함께 역동적인 신앙 공동체를 만들어가며, 
                하나님의 말씀으로 삶이 변화되는 은혜를 경험하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">사역팀</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="vision-icon">🎵</div>
              <h3>찬양팀</h3>
              <p><strong>팀장:</strong> 이찬양 집사</p>
              <p>음악으로 하나님께 영광을 돌리며 예배를 인도합니다.</p>
            </div>
            <div className="card">
              <div className="vision-icon">🎹</div>
              <h3>반주팀</h3>
              <p><strong>팀장:</strong> 박반주 권사</p>
              <p>피아노와 오르간으로 예배를 아름답게 섬깁니다.</p>
            </div>
            <div className="card">
              <div className="vision-icon">🎤</div>
              <h3>음향팀</h3>
              <p><strong>팀장:</strong> 최음향 집사</p>
              <p>예배의 음향과 영상을 담당합니다.</p>
            </div>
            <div className="card">
              <div className="vision-icon">🚪</div>
              <h3>안내팀</h3>
              <p><strong>팀장:</strong> 정안내 집사</p>
              <p>성도들을 따뜻하게 맞이하고 안내합니다.</p>
            </div>
            <div className="card">
              <div className="vision-icon">🌸</div>
              <h3>꽃꽂이팀</h3>
              <p><strong>팀장:</strong> 김꽃님 권사</p>
              <p>아름다운 꽃으로 예배당을 장식합니다.</p>
            </div>
            <div className="card">
              <div className="vision-icon">🧹</div>
              <h3>청소팀</h3>
              <p><strong>팀장:</strong> 박청소 집사</p>
              <p>교회를 깨끗하게 관리하고 정돈합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">당회 및 제직회</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>당회</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>최일광 목사 (당회장)</li>
                <li>이신실 장로</li>
                <li>박충성 장로</li>
              </ul>
            </div>
            <div className="card">
              <h3>제직회</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>최봉사 안수집사 (제직회장)</li>
                <li>정섬김 권사</li>
                <li>한사랑 집사</li>
                <li>조은혜 집사</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministers;
