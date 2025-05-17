import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoinList from './components/CoinList.jsx';
import CoinDetail from './components/CoinDetail.jsx';
import './styles.css';

function App() {
    return (
        <Router>
            <div className="app">
                <h1>Trình Theo Dõi Thị Trường Crypto</h1>
                <Routes>
                    <Route exact path="/" element={<CoinList />} />
                    <Route path="/coin/:id" element={<CoinDetail />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;