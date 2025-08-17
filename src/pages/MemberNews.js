import React from 'react';
import './PageStyles.css';

const MemberNews = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>교우 동정</h1>
          <p>교회 가족들의 기쁜 소식과 함께 나누는 소식들입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice-list">
            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎉 결혼 축하</h3>
                <span className="notice-date">2025.11.10</span>
              </div>
              <div className="notice-content">
                청년부 김사랑 형제와 이기쁨 자매가 11월 16일(토) 오후 2시에 
                결혼식을 올립니다. 교회 가족 여러분의 많은 축하와 참석 부탁드립니다.
                장소: 대구 웨딩홀 3층 그레이스홀
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">👶 출산 축하</h3>
                <span className="notice-date">2025.11.08</span>
              </div>
              <div className="notice-content">
                박은혜 집사 가정에 11월 5일 건강한 아들이 태어났습니다. 
                산모와 아기 모두 건강하며, 하나님께서 허락하신 
                소중한 생명을 축하해 주시기 바랍니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎓 입학 축하</h3>
                <span className="notice-date">2025.11.05</span>
              </div>
              <div className="notice-content">
                중고등부 최우수 학생이 대구대학교 신학과에 합격했습니다. 
                하나님의 일꾼으로 자라가는 모습이 기대되며, 
                앞으로의 학업에 하나님의 축복이 함께하시길 기도합니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🏥 건강 회복 감사</h3>
                <span className="notice-date">2025.11.01</span>
              </div>
              <div className="notice-content">
                수술을 받으셨던 김건강 권사님께서 완전히 회복되어 
                다시 교회에 나오시게 되었습니다. 그동안 기도해 주신 
                모든 분들께 감사드리며, 하나님의 치유하심을 찬양합니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">✈️ 선교사 파송</h3>
                <span className="notice-date">2025.10.28</span>
              </div>
              <div className="notice-content">
                청년부 출신 이선교 형제가 캄보디아 선교사로 파송됩니다. 
                11월 말 출국 예정이며, 현지에서 교육 선교 사역을 담당할 예정입니다. 
                선교지에서의 사역을 위해 기도로 후원해 주시기 바랍니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎂 생일 축하</h3>
                <span className="notice-date">2025.10.25</span>
              </div>
              <div className="notice-content">
                11월 생일을 맞으신 분들을 축하합니다.
                김은혜 목사님(11/3), 박사랑 집사님(11/12), 
                이기쁨 권사님(11/20), 최행복 장로님(11/28)
                모든 분들께 하나님의 축복이 넘치시길 기도합니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MemberNews;
