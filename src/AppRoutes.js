import React from 'react';
import {Home} from './Pages/Home'
import  {Index}  from './Pages/Index';
import {NotFound}  from './Pages/NotFound';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';



export const AppRoutes = () => {
    return (
        <Routes>
        
          <Route path="/" element={<Index />} /> 
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
       
      </Routes>

              
    )
}
