import {Route, Routes} from "react-router-dom"
import React from 'react';
import MainPage from './page/MainPage'
import ListUsersPage from './page/ListUsersPage'
import UpdateModal from './component/UpdateModal'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/people' element={<ListUsersPage/>}/>
      <Route path='/account' element={<UpdateModal/>}/>
    </Routes>
  );
}

export default App;