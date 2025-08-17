import React from 'react';
import './PageStyles.css';

const Location = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>오시는길</h1>
          <p>대구동도교회로 오시는 길을 안내해드립니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-card">
                <h3>📍 주소</h3>
                <p>대구광역시 동구 동대구로 123<br />대구동도교회</p>
              </div>
              <div className="info-card">
                <h3>📞 연락처</h3>
                <p>전화: 053-123-4567<br />팩스: 053-123-4568</p>
              </div>
              <div className="info-card">
                <h3>🚌 대중교통</h3>
                <p>지하철 1호선 동대구역 3번 출구<br />버스 101, 102, 103번</p>
              </div>
              <div className="info-card">
                <h3>🚗 자가용</h3>
                <p>동대구IC에서 10분<br />교회 주차장 이용 가능</p>
              </div>
            </div>
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>지도가 여기에 표시됩니다</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">교통 안내</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🚇 지하철 이용시</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>대구지하철 1호선 동대구역 하차</li>
                <li>3번 출구로 나와서 도보 5분</li>
                <li>동대구로를 따라 직진</li>
                <li>첫 번째 신호등에서 우회전</li>
              </ul>
            </div>
            <div className="card">
              <h3>🚌 버스 이용시</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>101번, 102번, 103번 버스 이용</li>
                <li>'동도교회앞' 정류장 하차</li>
                <li>정류장에서 도보 2분</li>
                <li>배차간격: 10-15분</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">주차 안내</h2>
          <div className="text-center">
            <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
              <h3>🅿️ 교회 주차장</h3>
              <p style={{lineHeight: '1.8', color: 'var(--text-light)'}}>
                교회 건물 뒤편에 주차장이 마련되어 있습니다.<br />
                주일예배 시간에는 교통정리 봉사자가 주차 안내를 도와드립니다.<br />
                주차 공간이 부족할 경우 인근 공영주차장을 이용해 주시기 바랍니다.
              </p>
              <div style={{marginTop: '20px', padding: '15px', background: 'var(--secondary-color)', borderRadius: '10px'}}>
                <strong>주차 가능 대수: 약 30대</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">찾아오시는 분들께</h2>
          <div className="text-center">
            <p style={{fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto 30px'}}>
              처음 오시는 분들은 길을 찾기 어려우실 수 있습니다.<br />
              언제든지 교회로 연락주시면 자세한 길 안내를 도와드리겠습니다.
            </p>
            <div className="grid grid-2" style={{maxWidth: '600px', margin: '0 auto'}}>
              <a href="tel:053-123-4567" className="btn btn-primary">📞 전화 문의</a>
              <a href="mailto:info@daegudongdo.org" className="btn btn-outline">✉️ 이메일 문의</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
