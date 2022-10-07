import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AcaiPage from "./pages/ex1";
import SignoPage from './pages/ex2';
import SorveteriaPage from './pages/ex3';
import Home from './pages/Home';

export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/> 
                <Route path='/acai' element={<AcaiPage />}/> 
                <Route path='/signo' element={<SignoPage />}/> 
                <Route path='/sorveteria' element={<SorveteriaPage />}/> 
            </Routes>
        </BrowserRouter>
    )
};
