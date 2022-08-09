import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search } from '@material-ui/icons';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app_page">
                <Sidebar />
                <SearchPage />
              </div>
            }
          />
          <Route
            path='/'
            element={
              <div className="app_page">
                <Sidebar />
                <RecommendedVideos />
              </div>
            }
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
