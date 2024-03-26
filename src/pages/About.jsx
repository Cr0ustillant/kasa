import React from 'react';
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import '../components/Collapse/Collapse.css';
import '../styles/About.css';
import datacollapse from "../datas/about.json";
import imgAboutBanner from '../assets/IMGbannerImg2.png';

function About() {

    return (
        <div className="main-container">
            <Banner className='about-banner' imgBanner={imgAboutBanner} textBanner={''}/>
            <div className='collapse-container'>
                {datacollapse.map((item, index) => (
                    <Collapse key={'collapse' + index} title={item.title} description={item.description} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default About;