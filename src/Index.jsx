import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import { Route, useParams, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//         <Route exact path="/" element={<Page />}/>
//         <Route exact path="/g/:key" element={<GamePage key={key}/>}/>
//     </>
//   )
// )
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);