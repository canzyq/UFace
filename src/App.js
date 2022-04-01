import { Routes, Route } from 'react-router-dom'
import Home from './Home.js'
import React from 'react';
import CustomProvider from 'rsuite/CustomProvider';
import zhCN from 'rsuite/locales/zh_CN';
import "ustyle/light.less";

const App = () => {
    return (
        <CustomProvider locale={zhCN} theme="light">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </CustomProvider>
    )
};

export default App;
