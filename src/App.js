import { Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import React from 'react';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
};

export default App;
