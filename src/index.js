import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/index.scss';
import HomeSection from '../src/pages/HomeSection';
import AboutUsSection from '../src/pages/AboutUsSection';
import ServicesSection from '../src/pages/ServicesSection';
import ClientSection from '../src/pages/ClientSection';
import ContactSection from '../src/pages/ContactSection';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <HomeSection 
    headingw1 = "LET'S" 
    headingw2 = "GROW" 
    headingw3 = "YOUR" 
    headingw4 = "BRAND" 
    tagline1="THE WORLD IS CHANGING......" 
    tagline2= "DONT BE LEFT BEHIND"
    />
    <AboutUsSection/> 
    <ServicesSection/>
    <ClientSection/>
    <ContactSection/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
