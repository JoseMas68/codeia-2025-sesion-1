import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-primary-dark to-primary">
        {/* Header */}
        <header className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/">
              <h1 className="text-3xl font-bold text-primary cursor-pointer hover:text-primary-light transition-colors">
                VerFlix
              </h1>
            </Link>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:type/:id" element={<MovieDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
