import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import WelcomeSection from '../WelcomeSection';
import About from '../About';
import Timeline from '../Timeline';
import Sponsors from '../Sponsors';
import Team from '../Team';
import Schedule from '../Schedule';
import Faq from '../Faq';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Footer from '../Footer';
import Registration from '../Registration';


function Home(){
    return(
        <>
        <Navbar/>
        <WelcomeSection/>
        <About/>
        <Timeline/>
        <Sponsors/>
        <Team/>
        <Schedule/>
        <Faq/>
        <Registration/>
        <Footer/>
        </>
    );
}

export default Home;