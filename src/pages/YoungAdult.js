import React from 'react';
import './PageStyles.css';

const YoungAdult = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>청년부</h1>
          <p>20-30대 청년들의 활기찬 신앙 공동체입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="generation-info">
            <div className="generation-icon">🌟</div>
            <h2>청년부 소개</h2>
            <p>
              20대와 30대 청년들이 함께 모여 신앙을 나누고 성장하는 역동적인 공동체입니다. 
              직장 생활과 신앙 생활의 균형을 찾아가며, 서로를 격려하고 지지하는 따뜻한 모임입니다.
            </p>
          </div>

          <div className="activity-grid">
            <div className="activity-card">
              <h4>🙏 주일예배</h4>
              <p><strong>시간:</strong> 주일 오후 1:30</p>
              <p><strong>장소:</strong> 청년부실</p>
              <p>청년들의 삶과 고민을 나누며 하나님의 말씀으로 위로받는 시간입니다.</p>
            </div>
            <div className="activity-card">
              <h4>📚 목요 성경공부</h4>
              <p><strong>시간:</strong> 목요일 오후 7:30</p>
              <p><strong>장소:</strong> 청년부실</p>
              <p>소그룹으로 나누어 깊이 있는 성경공부와 나눔의 시간을 갖습니다.</p>
            </div>
            <div className="activity-card">
              <h4>🍕 월례모임</h4>
              <p><strong>시간:</strong> 매월 마지막 토요일</p>
              <p><strong>장소:</strong> 교회 및 외부</p>
              <p>함께 식사하고 게임하며 친목을 도모하는 즐거운 시간입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">청년부 활동</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>💼 직장인 모임</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>직장 생활 고민 나눔</li>
                <li>신앙과 직업 윤리</li>
                <li>스트레스 관리와 기도</li>
                <li>커리어 상담 및 조언</li>
              </ul>
            </div>
            <div className="card">
              <h3>❤️ 교제 활동</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>등산 및 야외활동</li>
                <li>문화 체험 활동</li>
                <li>봉사활동 참여</li>
                <li>생일파티 및 축하모임</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">청년부 비전</h2>
          <div className="text-center">
            <h3 style={{fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '30px'}}>
              "세상의 빛과 소금이 되는 청년"
            </h3>
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto'}}>
              우리는 각자의 삶의 현장에서 그리스도의 사랑을 실천하며, 
              세상의 빛과 소금 역할을 감당하는 청년들이 되고자 합니다. 
              서로를 격려하고 함께 성장하며, 하나님 나라의 확장을 위해 헌신하는 공동체입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YoungAdult;
