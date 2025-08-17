import React from 'react';
import './PageStyles.css';

const Youth = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>중고등부</h1>
          <p>중학생과 고등학생을 위한 역동적인 신앙 공동체입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="generation-info">
            <div className="generation-icon">🎓</div>
            <h2>중고등부 소개</h2>
            <p>
              중학생과 고등학생들이 신앙과 학업을 균형 있게 발전시키며, 
              또래 친구들과 함께 건강한 신앙 공동체를 이루어가는 곳입니다.
            </p>
          </div>

          <div className="activity-grid">
            <div className="activity-card">
              <h4>📚 주일예배</h4>
              <p><strong>시간:</strong> 주일 오전 11:00</p>
              <p><strong>장소:</strong> 중고등부실</p>
              <p>청소년들의 눈높이에 맞춘 예배와 말씀 나눔의 시간입니다.</p>
            </div>
            <div className="activity-card">
              <h4>🎯 금요모임</h4>
              <p><strong>시간:</strong> 금요일 오후 7:00</p>
              <p><strong>장소:</strong> 중고등부실</p>
              <p>게임, 찬양, 나눔을 통해 친교를 나누고 신앙을 나눕니다.</p>
            </div>
            <div className="activity-card">
              <h4>🏕️ 수련회</h4>
              <p><strong>시간:</strong> 연 2회</p>
              <p><strong>장소:</strong> 수련원</p>
              <p>1박 2일 수련회를 통해 깊은 교제와 신앙 성장의 시간을 갖습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">활동 프로그램</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>📖 성경공부</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>소그룹 성경공부</li>
                <li>청소년 맞춤 교재 사용</li>
                <li>토론과 나눔 중심</li>
                <li>실생활 적용 중심</li>
              </ul>
            </div>
            <div className="card">
              <h3>🎮 특별활동</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>게임과 레크리에이션</li>
                <li>영화 관람 및 토론</li>
                <li>봉사활동 참여</li>
                <li>문화체험 활동</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Youth;
