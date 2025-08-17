import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
// 소개 및 연혁
import Greeting from './pages/Greeting';
import Philosophy from './pages/Philosophy';
import History from './pages/History';
import Location from './pages/Location';
// 예배 안내
import ServiceInfo from './pages/ServiceInfo';
import Offering from './pages/Offering';
import Ministers from './pages/Ministers';
// 말씀 및 찬양
import SundaySermon from './pages/SundaySermon';
import WednesdaySermon from './pages/WednesdaySermon';
import Praise from './pages/Praise';
// 다음 세대
import Infant from './pages/Infant';
import Elementary from './pages/Elementary';
import Youth from './pages/Youth';
import YoungAdult from './pages/YoungAdult';
// 알림 및 나눔
import Announcement from './pages/Announcement';
import ChurchNews from './pages/ChurchNews';
import MemberNews from './pages/MemberNews';
import PastoralColumn from './pages/PastoralColumn';
import PhotoAlbum from './pages/PhotoAlbum';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 소개 및 연혁 */}
            <Route path="/greeting" element={<Greeting />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/history" element={<History />} />
            <Route path="/location" element={<Location />} />
            {/* 예배 안내 */}
            <Route path="/service-info" element={<ServiceInfo />} />
            <Route path="/offering" element={<Offering />} />
            <Route path="/ministers" element={<Ministers />} />
            {/* 말씀 및 찬양 */}
            <Route path="/sunday-sermon" element={<SundaySermon />} />
            <Route path="/wednesday-sermon" element={<WednesdaySermon />} />
            <Route path="/praise" element={<Praise />} />
            {/* 다음 세대 */}
            <Route path="/infant" element={<Infant />} />
            <Route path="/elementary" element={<Elementary />} />
            <Route path="/youth" element={<Youth />} />
            <Route path="/young-adult" element={<YoungAdult />} />
            {/* 알림 및 나눔 */}
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/church-news" element={<ChurchNews />} />
            <Route path="/member-news" element={<MemberNews />} />
            <Route path="/pastoral-column" element={<PastoralColumn />} />
            <Route path="/photo-album" element={<PhotoAlbum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
