import React from 'react';
import './PageStyles.css';

const WednesdaySermon = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>수요 설교</h1>
          <p>매주 수요일에 선포되는 하나님의 말씀을 들어보세요</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sermon-list">
            <div className="sermon-item">
              <div className="sermon-date">2024.08.07</div>
              <h3 className="sermon-title">말씀으로 살아가는 삶</h3>
              <div className="sermon-verse">시편 119:105</div>
              <p className="sermon-summary">
                하나님의 말씀이 우리 삶의 등불이 되고 길의 빛이 되어 
                어떻게 우리를 인도하시는지에 대해 나누었습니다.
              </p>
              <div className="sermon-actions">
                <button className="btn btn-small btn-primary">🎧 듣기</button>
                <button className="btn btn-small btn-outline">📄 원고</button>
              </div>
            </div>

            <div className="sermon-item">
              <div className="sermon-date">2024.07.31</div>
              <h3 className="sermon-title">성령의 열매</h3>
              <div className="sermon-verse">갈라디아서 5:22-23</div>
              <p className="sermon-summary">
                성령의 아홉 가지 열매를 통해 성령 충만한 삶이 무엇인지, 
                어떻게 성령의 열매를 맺을 수 있는지 배웠습니다.
              </p>
              <div className="sermon-actions">
                <button className="btn btn-small btn-primary">🎧 듣기</button>
                <button className="btn btn-small btn-outline">📄 원고</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WednesdaySermon;
