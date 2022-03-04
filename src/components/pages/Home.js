import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import WelcomeSection from '../WelcomeSection';
import About from '../About';
import Timeline from '../Timeline';
import Sponsors from '../Sponsors';
import Team from '../Team';
import Schedule from '../Schedule';
import Footer from '../Footer';
import Registration from '../Registration';
import FaqUpd from '../FaqUpd';


function Home(){
    return(
        <>
        <Navbar/>
        <WelcomeSection/>
        <About/>
        <Timeline/>
        <Schedule/>
        <Sponsors/>
        <Team/>
        <FaqUpd/>
        <Registration/>
        <Footer/>
        </>
    );
}

export default Home;