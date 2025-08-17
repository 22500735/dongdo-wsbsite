import React from 'react';
import './PageStyles.css';

const PhotoAlbum = () => {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <h1>사진 앨범</h1>
          <p>교회의 소중한 순간들을 사진으로 만나보세요</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="photo-grid">
            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">청년부 수련회</h4>
                <p className="photo-date">2024.11.09</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">교회 창립 1주년</h4>
                <p className="photo-date">2024.10.28</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">여름성경학교</h4>
                <p className="photo-date">2024.07.15</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">지역사회 봉사</h4>
                <p className="photo-date">2024.09.20</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">찬양팀 연습</h4>
                <p className="photo-date">2024.08.10</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">세례식</h4>
                <p className="photo-date">2024.03.15</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">성탄절 행사</h4>
                <p className="photo-date">2023.12.24</p>
              </div>
            </div>

            <div className="photo-item">
              <div className="photo-placeholder">📸</div>
              <div className="photo-info">
                <h4 className="photo-title">교회 개척예배</h4>
                <p className="photo-date">2024.01.07</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoAlbum;
