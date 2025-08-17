import React from 'react';
import './PageStyles.css';

const Greeting = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>인사말</h1>
          <p>담임목사의 따뜻한 인사말씀을 전해드립니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="greeting-content">
            <div className="pastor-image">
              <div className="pastor-placeholder">👨‍💼</div>
            </div>
            <div className="greeting-text">
              <h2>최일광 목사</h2>
              <p className="pastor-title">담임목사</p>
              
              <div className="greeting-message">
                <p>
                  사랑하는 성도 여러분, 그리고 대구동도교회 홈페이지를 방문해 주신 모든 분들께 
                  하나님의 은혜와 평강이 함께하시기를 기원합니다.
                </p>
                
                <p>
                  저희 대구동도교회는 1974년 하나님의 부르심으로 시작된 젊고 역동적인 교회입니다. 
                  "하나님의 사랑으로 하나 되는 공동체"라는 비전을 가지고, 
                  예수 그리스도의 복음을 전하며 지역사회와 함께 성장하고 있습니다.
                </p>
                
                <p>
                  우리는 성경 말씀을 기반으로 한 건전한 신앙과 진실한 교제를 통해 
                  하나님 나라의 확장을 위해 힘쓰고 있습니다. 
                  특히 젊은 세대와 함께 미래를 준비하며, 
                  모든 세대가 함께 어우러지는 아름다운 신앙 공동체를 만들어가고 있습니다.
                </p>
                
                <p>
                  언제든지 저희 교회에 오셔서 하나님의 사랑을 경험하시고, 
                  따뜻한 교제 가운데 신앙의 기쁨을 나누시기 바랍니다. 
                  여러분을 사랑으로 맞이하겠습니다.
                </p>
                
                <p className="signature">
                  대구동도교회 담임목사<br />
                  <strong>최일광</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <h2 className="section-title">목회 비전</h2>
          <div className="grid grid-3">
            <div className="vision-card">
              <div className="vision-icon">📖</div>
              <h3>말씀 중심의 교회</h3>
              <p>성경 말씀을 기반으로 한 건전한 신앙과 올바른 신학을 추구합니다</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">❤️</div>
              <h3>사랑의 공동체</h3>
              <p>하나님의 사랑 안에서 서로를 섬기고 돌보는 따뜻한 공동체입니다</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🌍</div>
              <h3>선교하는 교회</h3>
              <p>복음을 전하며 지역사회와 세계를 향해 하나님의 사랑을 실천합니다</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Greeting;
