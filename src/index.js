
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './landing_page/signup/Signup';
import ProductsPage from './landing_page/products/ProductsPage';
 
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import AboutPage from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar/>
 <Routes>
  <Route path='/' element={<HomePage/>}/> 
  <Route path='/signup' element={<Signup/>} />
  <Route path='/about' element={<AboutPage/>}/> 
  <Route path='/product' element={<ProductsPage/>}/> 
  <Route path='/pricing' element={<PricingPage/>}/>
  <Route path='/support' element={<SupportPage/>}/>
  <Route path='/*' element={<NotFound/>}/>
 </Routes>
 <Footer/>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 