import React from 'react';
import './PageStyles.css';

const PastoralColumn = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>목회 칼럼</h1>
          <p>담임목사의 신앙과 삶에 대한 깊이 있는 나눔입니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sermon-list">
            <div className="sermon-item">
              <div className="sermon-date">2024.11.15</div>
              <h3 className="sermon-title">감사하는 마음으로 살아가기</h3>
              <p className="sermon-summary">
                추수감사절을 맞아 감사의 의미에 대해 생각해봅니다. 
                감사는 단순히 좋은 일이 있을 때만 하는 것이 아니라, 
                모든 상황에서 하나님의 선하심을 인정하는 신앙의 고백입니다. 
                어려운 시기일수록 감사할 제목을 찾아보며, 
                하나님께서 우리 삶에 베풀어주신 은혜를 되돌아보는 시간을 가져보시기 바랍니다.
              </p>
            </div>

            <div className="sermon-item">
              <div className="sermon-date">2024.11.08</div>
              <h3 className="sermon-title">공동체 안에서의 성장</h3>
              <p className="sermon-summary">
                신앙은 개인적인 것이지만 동시에 공동체적인 것입니다. 
                혼자서는 할 수 없는 것들이 공동체 안에서는 가능해집니다. 
                서로의 부족함을 채워주고, 함께 기도하며, 격려하는 가운데 
                우리는 더욱 성숙한 신앙인으로 자라갈 수 있습니다. 
                교회 공동체 안에서 서로를 섬기며 함께 성장해 나가시기 바랍니다.
              </p>
            </div>

            <div className="sermon-item">
              <div className="sermon-date">2024.11.01</div>
              <h3 className="sermon-title">젊은 교회의 비전</h3>
              <p className="sermon-summary">
                대구동도교회는 젊고 역동적인 교회입니다. 
                젊다는 것은 나이가 어리다는 뜻이 아니라 
                새로운 것에 도전하고, 변화를 두려워하지 않으며, 
                미래를 향해 나아가는 정신을 의미합니다. 
                우리 모두가 젊은 마음으로 하나님 나라의 확장을 위해 
                함께 달려가는 교회가 되기를 소망합니다.
              </p>
            </div>

            <div className="sermon-item">
              <div className="sermon-date">2024.10.25</div>
              <h3 className="sermon-title">기도의 힘</h3>
              <p className="sermon-summary">
                기도는 하나님과의 대화입니다. 
                우리의 필요를 아뢰는 것도 중요하지만, 
                하나님의 음성을 듣는 것은 더욱 중요합니다. 
                바쁜 일상 속에서도 조용한 시간을 내어 
                하나님과 깊이 교제하는 시간을 가지시기 바랍니다. 
                기도를 통해 하나님의 뜻을 분별하고 순종하는 삶을 살아가시길 기원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastoralColumn;
