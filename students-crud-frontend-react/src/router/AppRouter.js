import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import AddStudent from '../pages/AddStudent';
import EditStudent from '../pages/EditStudent';
import Home from '../pages/Home';
import ViewStudent from '../pages/ViewStudent';

const AppRouter = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/addstudent"} element={<AddStudent />} />
        <Route path={"/viewstudent/:id"} element={<ViewStudent />} />
        <Route path={"/editstudent/:id"} element={<EditStudent />} />
      </Routes>
    </>
  );
}

export default AppRouter