import React from 'react';
import './PageStyles.css';

const Announcement = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>공지</h1>
          <p>교회의 중요한 공지사항을 확인하세요</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notice-list">
            <div className="notice-item notice-important">
              <div className="notice-header">
                <h3 className="notice-title">🔔 추수감사절 특별예배 안내</h3>
                <span className="notice-date">2024.11.15</span>
              </div>
              <div className="notice-content">
                오는 11월 24일(주일) 추수감사절을 맞아 특별예배를 드립니다. 
                하나님께서 한 해 동안 베풀어주신 은혜에 감사하며 함께 예배드려요.
                특별 찬양과 간증이 준비되어 있습니다.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">📚 성경공부 신청 안내</h3>
                <span className="notice-date">2024.11.10</span>
              </div>
              <div className="notice-content">
                12월부터 시작되는 새 학기 성경공부 신청을 받습니다. 
                초급반, 중급반으로 나누어 진행되며, 매주 수요일 오후 7시에 모입니다.
                신청은 교회 사무실 또는 담당 교역자에게 해주세요.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🎄 성탄절 행사 준비 모임</h3>
                <span className="notice-date">2024.11.08</span>
              </div>
              <div className="notice-content">
                성탄절 특별예배와 행사 준비를 위한 모임을 갖습니다. 
                찬양팀, 연극팀, 장식팀 등 각 분야별로 준비할 예정입니다.
                참여를 원하시는 분들은 이번 주 내로 신청해 주세요.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">🚗 교회 주차장 이용 안내</h3>
                <span className="notice-date">2024.11.05</span>
              </div>
              <div className="notice-content">
                주일예배 시간 주차장 혼잡을 방지하기 위해 교통정리 봉사자가 배치됩니다. 
                가급적 대중교통을 이용해 주시고, 주차 시에는 봉사자의 안내에 협조해 주세요.
              </div>
            </div>

            <div className="notice-item">
              <div className="notice-header">
                <h3 className="notice-title">💝 사랑의 김장 나눔 행사</h3>
                <span className="notice-date">2024.11.01</span>
              </div>
              <div className="notice-content">
                지역사회 독거노인분들을 위한 김장 나눔 행사를 진행합니다. 
                11월 30일(토) 오전 9시부터 교회에서 김장을 담그고, 
                오후에 어려운 이웃들께 전달할 예정입니다.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Announcement;
