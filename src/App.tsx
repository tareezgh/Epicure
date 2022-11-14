import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './components/Header';

function App() {
  return (

    <Header></Header>
  //   <BrowserRouter>
  //   <Routes>
  //     {/* <Route path="/" element={<Layout />} />
  //     <Route path="/" element={< />} /> */}
  //   </Routes>
  // </BrowserRouter>
  );
}

export default App;
