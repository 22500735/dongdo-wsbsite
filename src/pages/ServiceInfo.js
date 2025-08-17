import React from 'react';
import './PageStyles.css';

const ServiceInfo = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>예배 안내</h1>
          <p>하나님께 드리는 예배 시간과 장소를 안내해드립니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">주일 예배</h2>
          <div className="service-schedule">
            <div className="service-item">
              <div>
                <div className="service-time">오전 9:00</div>
                <div className="service-name">1부 예배</div>
              </div>
              <div className="service-location">본당</div>
            </div>
            <div className="service-item">
              <div>
                <div className="service-time">오전 11:00</div>
                <div className="service-name">2부 예배 (대예배)</div>
              </div>
              <div className="service-location">본당</div>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '30px'}}>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8'}}>
              주일예배는 하나님께 드리는 가장 중요한 예배입니다.<br />
              찬양과 말씀, 기도를 통해 하나님과 만나는 귀한 시간입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">평일 예배</h2>
          <div className="service-schedule">
            <div className="service-item">
              <div>
                <div className="service-time">수요일 오후 7:30</div>
                <div className="service-name">수요 예배</div>
              </div>
              <div className="service-location">본당</div>
            </div>
            <div className="service-item">
              <div>
                <div className="service-time">금요일 오후 7:30</div>
                <div className="service-name">금요 기도회</div>
              </div>
              <div className="service-location">본당</div>
            </div>
          </div>
          
          <div className="text-center" style={{marginTop: '30px'}}>
            <p style={{fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8'}}>
              평일 예배는 한 주간의 영적 충전과 기도의 시간입니다.<br />
              바쁜 일상 중에도 하나님과 교제하는 소중한 시간을 가져보세요.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">특별 예배</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🌅 새벽기도회</h3>
              <p><strong>시간:</strong> 매일 오전 5:30</p>
              <p><strong>장소:</strong> 본당</p>
              <p style={{marginTop: '15px', color: 'var(--text-light)'}}>
                하루를 하나님께 맡기며 시작하는 새벽기도 시간입니다.
              </p>
            </div>
            <div className="card">
              <h3>👶 유아부 예배</h3>
              <p><strong>시간:</strong> 주일 오전 11:00</p>
              <p><strong>장소:</strong> 유아부실</p>
              <p style={{marginTop: '15px', color: 'var(--text-light)'}}>
                어린 자녀들을 위한 특별한 예배 프로그램입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: 'var(--secondary-color)'}}>
        <div className="container">
          <h2 className="section-title">예배 순서</h2>
          <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
            <h3>주일 대예배 순서</h3>
            <div style={{textAlign: 'left', marginTop: '20px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <span>예배 시작</span>
                <span>오전 11:00</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <span>찬양과 경배</span>
                <span>15분</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <span>기도</span>
                <span>5분</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <span>성경봉독</span>
                <span>5분</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <span>말씀선포</span>
                <span>30분</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee'}}>
                <span>헌금</span>
                <span>5분</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0'}}>
                <span>축도</span>
                <span>2분</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">예배 안내사항</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>👔 복장 안내</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>단정한 복장으로 참석해 주세요</li>
                <li>편안하고 깔끔한 옷차림 권장</li>
              </ul>
            </div>
            <div className="card">
              <h3>📱 예배 중 주의사항</h3>
              <ul style={{textAlign: 'left', lineHeight: '1.8', color: 'var(--text-light)'}}>
                <li>휴대폰은 무음 또는 진동으로 설정</li>
                <li>예배 중 통화는 삼가해 주세요</li>
                <li>사진 촬영은 허용된 시간에만</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceInfo;
