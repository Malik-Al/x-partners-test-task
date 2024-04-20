import {Route, Routes} from "react-router-dom"
import React from 'react';
import MainPage from './page/MainPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
    </Routes>
  );
}

export default App;