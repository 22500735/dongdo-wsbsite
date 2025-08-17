import React from 'react';
import './PageStyles.css';

const Praise = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>찬양</h1>
          <p>하나님께 드리는 아름다운 찬양을 함께 나누어요</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">이번 주 찬양</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🎵 주일 찬양</h3>
              <p><strong>찬양곡:</strong> 하나님의 사랑</p>
              <p><strong>찬양팀:</strong> 대구동도 찬양팀</p>
              <div className="sermon-actions" style={{marginTop: '20px'}}>
                <button className="btn btn-small btn-primary">🎧 듣기</button>
                <button className="btn btn-small btn-outline">🎼 악보</button>
              </div>
            </div>
            <div className="card">
              <h3>🎹 특송</h3>
              <p><strong>찬양곡:</strong> 주님의 은혜</p>
              <p><strong>연주자:</strong> 박반주 권사</p>
              <div className="sermon-actions" style={{marginTop: '20px'}}>
                <button className="btn btn-small btn-primary">🎧 듣기</button>
                <button className="btn btn-small btn-outline">🎼 악보</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">찬양팀 소개</h2>
          <div className="text-center">
            <div className="generation-info">
              <div className="generation-icon">🎵</div>
              <h2>대구동도 찬양팀</h2>
              <p>
                음악으로 하나님께 영광을 돌리는 찬양팀입니다. 
                젊고 활기찬 찬양으로 예배에 생동감을 더하며, 
                성도들과 함께 하나님을 찬양하는 기쁨을 나누고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Praise;
