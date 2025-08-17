import React from 'react';
import './PageStyles.css';

const SundaySermon = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>주일 설교</h1>
          <p>매주 주일에 선포되는 하나님의 말씀을 들어보세요</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sermon-list">
            <div className="sermon-item">
              <div className="sermon-date">2024.08.11</div>
              <h3 className="sermon-title">하나님의 사랑으로 하나 되는 공동체</h3>
              <div className="sermon-verse">요한복음 17:20-23</div>
              <p className="sermon-summary">
                예수님께서 기도하신 하나 됨의 비전을 통해 우리가 어떻게 사랑 안에서 
                하나 되어야 하는지에 대해 말씀을 나누었습니다.
              </p>
              <div className="sermon-actions">
                <button className="btn btn-small btn-primary">🎧 듣기</button>
                <button className="btn btn-small btn-outline">📄 원고</button>
              </div>
            </div>

            <div className="sermon-item">
              <div className="sermon-date">2024.08.04</div>
              <h3 className="sermon-title">믿음으로 살아가는 삶</h3>
              <div className="sermon-verse">히브리서 11:1-6</div>
              <p className="sermon-summary">
                믿음의 정의와 믿음으로 살아간 믿음의 선진들의 삶을 통해 
                우리도 믿음으로 살아가야 할 이유를 배웠습니다.
              </p>
              <div className="sermon-actions">
                <button className="btn btn-small btn-primary">🎧 듣기</button>
                <button className="btn btn-small btn-outline">📄 원고</button>
              </div>
            </div>

            <div className="sermon-item">
              <div className="sermon-date">2024.07.28</div>
              <h3 className="sermon-title">기도하는 교회</h3>
              <div className="sermon-verse">사도행전 2:42-47</div>
              <p className="sermon-summary">
                초대교회의 모습을 통해 기도가 교회 공동체에 얼마나 중요한지, 
                그리고 우리가 어떻게 기도하는 교회가 되어야 하는지 나누었습니다.
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

export default SundaySermon;
