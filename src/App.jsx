// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 引入刚才创建的两个页面
import Home from './pages/Home';
import Services from './pages/Services';
import BookDriver from './components/Service_BookDriver';
import ServicesOverview from './components/Service_Overview';

function App() {
  return (
    // 1. 包裹整个应用
    <BrowserRouter>
      <Routes>
        {/* 2. 定义路由规则 */}
        <Route path="/" element={<Home />} />           {/* 首页 */}

        <Route path="/services" element={<Services />}>
          <Route index element={<ServicesOverview />} />   
          <Route path="book" element={<BookDriver />} />    
        </Route> 
        
        {/* 你以后还可以加更多页面，比如：
        <Route path="/about" element={<About />} /> 
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;