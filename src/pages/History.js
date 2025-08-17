import React from 'react';
import './PageStyles.css';

const History = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>교회연혁</h1>
          <p>대구동도교회의 성장과 발전 과정을 소개합니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2024.01</div>
              <div className="timeline-content">
                <h4>대구동도교회 개척</h4>
                <p>하나님의 부르심으로 김은혜 목사와 함께 대구동도교회가 시작되었습니다. 
                   "하나님의 사랑으로 하나 되는 공동체"라는 비전을 가지고 첫 발걸음을 내딛었습니다.</p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">2024.02</div>
              <div className="timeline-content">
                <h4>첫 주일예배 시작</h4>
                <p>소수의 성도들과 함께 첫 주일예배를 드렸습니다. 
                   비록 작은 시작이었지만 하나님께서 함께하심을 확신하며 예배를 시작했습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.03</div>
              <div className="timeline-content">
                <h4>첫 번째 세례식</h4>
                <p>새로운 가족들과 함께하는 첫 세례식을 진행했습니다. 
                   5명의 새 가족이 세례를 받으며 교회 공동체의 일원이 되었습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.04</div>
              <div className="timeline-content">
                <h4>수요예배 시작</h4>
                <p>주일예배와 함께 수요예배를 시작하여 성도들의 신앙 성장을 위한 
                   더 많은 기회를 제공하게 되었습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.05</div>
              <div className="timeline-content">
                <h4>찬양팀 창립</h4>
                <p>음악으로 하나님께 영광을 돌리는 찬양팀이 창립되었습니다. 
                   젊고 활기찬 찬양으로 예배에 생동감을 더하고 있습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.06</div>
              <div className="timeline-content">
                <h4>청년부 창립</h4>
                <p>젊고 활기찬 청년부가 정식으로 창립되었습니다. 
                   20-30대 청년들이 모여 활발한 신앙 활동과 교제를 시작했습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.07</div>
              <div className="timeline-content">
                <h4>여름성경학교</h4>
                <p>첫 번째 여름성경학교를 개최하여 어린이들과 청소년들에게 
                   재미있고 의미 있는 신앙 교육의 기회를 제공했습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.08</div>
              <div className="timeline-content">
                <h4>교회 홈페이지 개설</h4>
                <p>교회 소식과 정보를 더 효과적으로 전달하기 위해 
                   공식 홈페이지를 개설하여 온라인 소통을 시작했습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.09</div>
              <div className="timeline-content">
                <h4>지역사회 봉사 시작</h4>
                <p>지역사회와 함께하는 첫 번째 봉사활동을 시작했습니다. 
                   독거노인 돌봄과 지역 청소 활동을 통해 사랑을 실천하고 있습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.10</div>
              <div className="timeline-content">
                <h4>추수감사절 특별예배</h4>
                <p>하나님의 은혜에 감사하는 추수감사절 특별예배를 드렸습니다. 
                   한 해 동안 베풀어주신 하나님의 은혜를 되돌아보는 시간이었습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.11</div>
              <div className="timeline-content">
                <h4>선교 후원 시작</h4>
                <p>해외 선교사 후원을 시작하여 복음 전파의 사명을 감당하기 시작했습니다. 
                   작지만 의미 있는 선교 동참의 첫걸음을 내딛었습니다.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2024.12</div>
              <div className="timeline-content">
                <h4>성탄절 특별예배</h4>
                <p>예수님의 탄생을 기념하는 성탄절 특별예배를 드리며 
                   한 해를 마무리하고 새로운 해를 준비하는 시간을 가졌습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <h2 className="section-title">미래 비전</h2>
          <div className="grid grid-3">
            <div className="vision-card">
              <div className="vision-icon">🏛️</div>
              <h3>교회 건축</h3>
              <p>하나님께서 허락하시는 때에 자체 교회 건물을 마련하여 더 많은 성도들과 함께 예배드리기를 소망합니다.</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">👥</div>
              <h3>공동체 확장</h3>
              <p>다양한 연령층의 성도들이 함께하는 건강한 교회 공동체로 성장하여 지역사회의 빛과 소금이 되겠습니다.</p>
            </div>
            <div className="vision-card">
              <div className="vision-icon">🌍</div>
              <h3>선교 확장</h3>
              <p>지역사회를 넘어 국내외 선교에 적극 참여하여 복음을 전하는 교회로 발전해 나가겠습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
