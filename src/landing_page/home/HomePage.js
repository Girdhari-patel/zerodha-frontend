import React from 'react'
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Princig from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <h1>
     
            <Hero/>
            <Awards/>
            <Stats/>
            <Princig/>
            <Education/>
            <OpenAccount/>
 
        </h1>
      );
}

export default HomePage;