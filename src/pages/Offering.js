import React from 'react';
import './PageStyles.css';

const Offering = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>헌금 안내</h1>
          <p>하나님께 드리는 헌금에 대한 안내입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">헌금의 의미</h2>
          <div className="text-center">
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 40px'}}>
              헌금은 하나님께 대한 감사와 사랑의 표현이며, 교회 사역과 선교를 위한 소중한 참여입니다.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <h3>💝 십일조</h3>
              <p>하나님께서 주신 모든 소득의 십분의 일을 드리는 헌금입니다.</p>
            </div>
            <div className="card">
              <h3>🎁 감사헌금</h3>
              <p>특별한 은혜와 감사한 일이 있을 때 드리는 헌금입니다.</p>
            </div>
            <div className="card">
              <h3>🌍 선교헌금</h3>
              <p>복음 전파와 선교 사역을 위해 드리는 헌금입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">헌금 방법</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🏛️ 현금 헌금</h3>
              <p>예배 시간에 헌금함에 직접 드리실 수 있습니다.</p>
              <ul style={{textAlign: 'left', marginTop: '15px', color: 'var(--text-light)'}}>
                <li>헌금봉투에 성명과 헌금 종류 기재</li>
                <li>예배 중 헌금 시간에 드림</li>
                <li>헌금함은 본당 앞쪽에 위치</li>
              </ul>
            </div>
            <div className="card">
              <h3>💳 계좌 이체</h3>
              <p>은행 계좌로 헌금을 드리실 수 있습니다.</p>
              <div style={{marginTop: '15px', padding: '15px', background: 'var(--secondary-color)', borderRadius: '10px'}}>
                <p><strong>대구은행 123-456-789012</strong></p>
                <p>예금주: 대구동도교회</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offering;
