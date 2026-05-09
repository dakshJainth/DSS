import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Detail Pages */}
          <Route path="projects/:id" element={<ProjectDetail />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
