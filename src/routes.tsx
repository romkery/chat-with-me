import React from 'react';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';

export default [
    {path: '*', element: <Auth/>},
    {path: '/login/', element: <Auth/>},
    {path: '/im/*', element: <Home/>}
];