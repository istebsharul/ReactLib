import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/About/about';
import Layout from './layout';
import Contact from './components/contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
