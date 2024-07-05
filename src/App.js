import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, defaultTheme } from '@adobe/react-spectrum';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AirportList from './components/AirportList';
import AirportPage from './components/AirportPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider theme={defaultTheme}>
        <Router>
          <div className="app">
            <Header />
            <div className="main-content">
              <div className="sidebar">
                <Sidebar />
              </div>
              <div className="content">
                <Routes>
                  <Route path="/" element={<AirportList />} />
                  <Route path="/airports" element={<AirportPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
