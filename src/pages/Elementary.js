import React from 'react';
import './PageStyles.css';

const Elementary = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>유초등부</h1>
          <p>초등학교 1-6학년을 위한 신앙 교육 프로그램입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="generation-info">
            <div className="generation-icon">📚</div>
            <h2>유초등부 소개</h2>
            <p>
              초등학교 1학년부터 6학년까지의 어린이들이 체계적으로 성경을 배우고 
              신앙의 기초를 튼튼히 세워갈 수 있는 교육 프로그램을 운영합니다.
            </p>
          </div>

          <div className="activity-grid">
            <div className="activity-card">
              <h4>📖 주일학교</h4>
              <p><strong>시간:</strong> 주일 오전 11:00</p>
              <p><strong>장소:</strong> 초등부실</p>
              <p>연령별 성경 교육과 찬양, 게임을 통해 재미있게 신앙을 배웁니다.</p>
            </div>
            <div className="activity-card">
              <h4>🎯 특별활동</h4>
              <p><strong>시간:</strong> 월 1회 토요일</p>
              <p><strong>장소:</strong> 교회 및 야외</p>
              <p>야외활동, 체험학습, 봉사활동 등 다양한 프로그램을 진행합니다.</p>
            </div>
            <div className="activity-card">
              <h4>🏕️ 여름성경학교</h4>
              <p><strong>시간:</strong> 여름방학 중 3일</p>
              <p><strong>장소:</strong> 교회</p>
              <p>여름방학을 이용한 집중적인 성경 교육과 다양한 활동을 합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">교육 목표</h2>
          <div className="grid grid-3">
            <div className="vision-card">
              <div className="vision-icon">❤️</div>
              <h3>하나님 사랑</h3>
              <p>하나님의 사랑을 깨닫고 하나님을 사랑하는 마음을 기릅니다</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🤝</div>
              <h3>이웃 사랑</h3>
              <p>친구들과 가족, 이웃을 사랑하고 섬기는 마음을 배웁니다</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">📖</div>
              <h3>말씀 생활</h3>
              <p>성경 말씀을 생활 속에서 실천하는 어린이가 되도록 돕습니다</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elementary;
