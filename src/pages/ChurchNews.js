import React from 'react';
import './PageStyles.css';

const ChurchNews = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>교회 소식</h1>
          <p>대구동도교회의 다양한 소식과 활동을 전해드립니다</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice-list">
            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎉 청년부 수련회 성황리 마쳐</h3>
                <span className="notice-date">2024.11.12</span>
              </div>
              <div className="notice-content">
                지난 11월 9일-10일 청년부 수련회가 성황리에 마쳤습니다. 
                "하나님의 꿈을 꾸는 청년"이라는 주제로 진행된 이번 수련회에는 
                25명의 청년들이 참석하여 은혜로운 시간을 보냈습니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎵 찬양팀 새 멤버 영입</h3>
                <span className="notice-date">2024.11.08</span>
              </div>
              <div className="notice-content">
                찬양팀에 새로운 멤버들이 합류했습니다. 
                기타리스트 김찬양 형제와 베이시스트 이음악 자매가 
                새롭게 찬양팀에 참여하여 더욱 풍성한 찬양을 준비하고 있습니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">📚 어린이 도서관 개관</h3>
                <span className="notice-date">2024.11.05</span>
              </div>
              <div className="notice-content">
                교회 2층에 어린이 도서관이 새롭게 문을 열었습니다. 
                성경 동화책과 신앙 서적 등 200여 권의 도서가 비치되어 있으며, 
                매주 일요일 오후 2시-4시에 개방됩니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🤝 지역사회 봉사활동 참여</h3>
                <span className="notice-date">2024.11.01</span>
              </div>
              <div className="notice-content">
                교회 봉사팀이 동구청과 함께하는 지역 청소 활동에 참여했습니다. 
                15명의 성도들이 참여하여 교회 주변 거리 청소와 
                독거노인 가정 방문 봉사를 진행했습니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎂 교회 창립 1주년 감사예배</h3>
                <span className="notice-date">2024.10.28</span>
              </div>
              <div className="notice-content">
                대구동도교회 창립 1주년을 맞아 감사예배를 드렸습니다. 
                하나님의 은혜로 한 해를 무사히 보낼 수 있었음에 감사하며, 
                앞으로도 지역사회와 함께 성장하는 교회가 되겠다고 다짐했습니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChurchNews;
