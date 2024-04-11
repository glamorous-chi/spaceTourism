import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/swiper-bundle.css";
// import { Suspense } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <App />
    {/* <Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense> */}
  </React.StrictMode>,
)

