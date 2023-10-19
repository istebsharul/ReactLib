import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App'; //Removing This will cause disconnecting to CSS
import reportWebVitals from './reportWebVitals';
import Home from './components/Home/Home';
import AboutUs from './components/About/about';
import Layout from './layout';
import Contact from './components/contact/contact';
import Github, { githubInfoLoader } from './components/Github/github';
const root = createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<AboutUs />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route path='user/:userid' element={<User />} /> */}
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)