import { Routes, Route } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage';
import ActivityPage from './pages/ActivityPage';
import TrackPage from './pages/Track';
import FrontendPage from './pages/Track/FrontendPage';
import BackendPage from './pages/Track/BackendPage';
import AndroidPage from './pages/Track/AndroidPage';
import UiuxPage from './pages/Track/UiuxPage';
import GamePage from './pages/Track/GamePage';
import IosPage from './pages/Track/IosPage';
import RecruitPage from './pages/Recruit/RecruitPage';
import RecruitDetailPage from './pages/Recruit/RecruitDetailPage';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<BoardPage />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/track" element={<TrackPage />}>
            <Route path="frontend" element={<FrontendPage />} />
            <Route path="backend" element={<BackendPage />} />
            <Route path="android" element={<AndroidPage />} />
            <Route path="uiux" element={<UiuxPage />} />
            <Route path="game" element={<GamePage />} />
            <Route path="ios" element={<IosPage />} />
          </Route>
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/recruit/:id" element={<RecruitDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
