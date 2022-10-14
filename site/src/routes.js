import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AcaiPage from "./pages/primeiraSequencia/ex1";
import SignoPage from './pages/primeiraSequencia/ex2';
import SorveteriaPage from './pages/primeiraSequencia/ex3';
import SalarioPage from './pages/segundaSequencia/ex4'
import ParadasPage from './pages/segundaSequencia/ex5';
import TemperaturaPage from './pages/segundaSequencia/ex6';
import OrcamentoPage from './pages/terceiraSequencia/ex7';
import CinemaPage from './pages/terceiraSequencia/ex8';


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

                <Route path='/terceiro/ex7' element={<OrcamentoPage />} /> 
                <Route path='/terceiro/ex8' element={<CinemaPage />} /> 
            </Routes>
        </BrowserRouter>
    )   
};
