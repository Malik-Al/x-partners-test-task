import {Route, Routes} from "react-router-dom"
import React from 'react';
import MainPage from './page/MainPage'
import ListUsersPage from './page/ListUsersPage'


function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/account' element={<ListUsersPage/>}/>

    </Routes>
  );
}

export default App;