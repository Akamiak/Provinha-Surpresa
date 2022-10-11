import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcaiPage from "./pages/primeiraSequencia/ex1";
import SignoPage from './pages/primeiraSequencia/ex2';
import SorveteriaPage from './pages/primeiraSequencia/ex3';
import SalarioPage from './pages/segundaSequencia/ex4'
import ParadasPage from './pages/segundaSequencia/ex5';
import TemperaturaPage from './pages/segundaSequencia/ex6';


export default function Index() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/> 
                <Route path='/primeiro/ex1' element={<AcaiPage />} /> 
                <Route path='/primeiro/ex2' element={<SignoPage />} /> 
                <Route path='/primeiro/ex3' element={<SorveteriaPage />} /> 
                <Route path='/segundo/ex4' element={<SalarioPage />} /> 
                <Route path='/segundo/ex5' element={<ParadasPage />} /> 
                <Route path='/segundo/ex5' element={<ParadasPage />} /> 
                <Route path='/segundo/ex6' element={<TemperaturaPage />} /> 
            </Routes>
        </BrowserRouter>
    )   
};
