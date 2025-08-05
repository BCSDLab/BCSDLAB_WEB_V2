import { Routes, Route, Navigate } from 'react-router-dom';
import BoardPage from './pages/BoardPage';
import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage';
import ActivityPage from './pages/ActivityPage';
import TrackPage from './pages/TrackPage';
import TrackContent from './pages/TrackPage/TrackContent';
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
            <Route index element={<Navigate to="/track/frontend" replace />} />
            <Route path=":trackName"element={<TrackContent />} />
          </Route>
          <Route path="/recruit" element={<RecruitPage />} />
          <Route path="/recruit/:id" element={<RecruitDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
