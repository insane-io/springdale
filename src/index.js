import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from "./Pages/Home"
import About from './Pages/About';
import Academics from './Pages/Academics';
import Admission from './Pages/Admission';
import Faculty from './Pages/Faculty';
import Students from './Pages/Students';
import Gallary from './Pages/Gallary';
import Contact from './Pages/Contact';

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route path='/' element={<BaseLayout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='academics' element={<Academics />} />
        <Route path='admission' element={<Admission />} />
        <Route path='faculty' element={<Faculty />} />
        <Route path='students' element={<Students />} />
        <Route path='gallery' element={<Gallary />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
