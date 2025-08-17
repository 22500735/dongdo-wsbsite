import React from 'react';
import './PageStyles.css';

const Infant = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>영유부</h1>
          <p>0-7세 영유아들을 위한 특별한 프로그램입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="generation-info">
            <div className="generation-icon">👶</div>
            <h2>영유부 소개</h2>
            <p>
              0세부터 7세까지의 영유아들이 하나님의 사랑을 느끼고 
              즐겁게 신앙을 배울 수 있는 프로그램을 운영하고 있습니다.
            </p>
          </div>

          <div className="activity-grid">
            <div className="activity-card">
              <h4>👶 영아부 (0-2세)</h4>
              <p><strong>시간:</strong> 주일 오전 11:00</p>
              <p><strong>장소:</strong> 영아부실</p>
              <p>부모님과 함께 참여하는 프로그램으로 찬양과 간단한 활동을 합니다.</p>
            </div>
            <div className="activity-card">
              <h4>🧒 유아부 (3-5세)</h4>
              <p><strong>시간:</strong> 주일 오전 11:00</p>
              <p><strong>장소:</strong> 유아부실</p>
              <p>성경 이야기와 찬양, 만들기 활동을 통해 하나님을 배웁니다.</p>
            </div>
            <div className="activity-card">
              <h4>👧 유치부 (6-7세)</h4>
              <p><strong>시간:</strong> 주일 오전 11:00</p>
              <p><strong>장소:</strong> 유치부실</p>
              <p>체계적인 성경 교육과 다양한 활동으로 신앙의 기초를 다집니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">교육 프로그램</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>📚 성경 교육</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>연령별 맞춤 성경 이야기</li>
                <li>시청각 자료를 활용한 교육</li>
                <li>체험 활동을 통한 학습</li>
                <li>암송 구절 익히기</li>
              </ul>
            </div>
            <div className="card">
              <h3>🎨 특별 활동</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>만들기 및 그리기 활동</li>
                <li>율동과 찬양 배우기</li>
                <li>역할놀이를 통한 성경 체험</li>
                <li>계절별 특별 프로그램</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infant;
