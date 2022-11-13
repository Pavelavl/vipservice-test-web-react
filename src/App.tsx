import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Search from './components/Search/Search';
import Notfoundpage from './components/Notfoundpage/Notfoundpage';
import Index from './components/Index/Index';
import Info from './components/Info/Info';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path='/avia' element={<Search />} />
      <Route path='/avia/info' element={<Info />} />
      <Route path='*' element={<Notfoundpage />} />
    </Routes>
  );
}

export default App;
