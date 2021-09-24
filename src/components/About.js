import { useState } from 'react';
import './About.scss';
import { GrReactjs } from 'react-icons/gr';
import { TiHtml5 } from 'react-icons/ti';
import { DiMongodb } from 'react-icons/di';
import {
IoLogoJavascript,
IoLogoNodejs,
IoLogoCss3,
IoLogoSass,
} from 'react-icons/io';


function About () {
    
        return (
            <>
                <div className='about'>
                    <div className='about_container'>
                        <p>Hello there! </p>
                        <p>I'm a frontend software developer, with a background in Law and security.</p>

                        <p>Recently I graduated from Ironhack Lisbon Web Development Bootcamp.</p>

                        <p>
                            Throughout learning experiences carried out professionally and socially, 
                            I've acquired a set of skills and know-how's interesting for a software development world such as teamwork, 
                            attention detail, and problem-solving kind of mindset. </p>
                        <p>At a personal level, I would mention the ability to adapt to different environments and cultures.</p>
                            
                    
                    </div>
                    <div className='skills'>
                        <span>Skills:</span>
                        <div className='skills_about'>
                            <div className='skill_icon'>
                                <TiHtml5 size={60} />
                                <p>HTML</p>
                            </div>
                            <div className='skill_icon'>
                                <IoLogoCss3 size={60} />
                                <p>CSS</p>
                            </div>
                            <div className='skill_icon'>
                                <IoLogoSass size={60} />
                                <p>SASS</p>
                            </div>

                            <div className='skill_icon'>
                                <IoLogoJavascript size={60} />
                                <p>JavaScript</p>
                            </div>
                            <div className='skill_icon'>
                                <IoLogoNodejs size={60} />
                                <p>NodeJs</p>
                            </div>
                            <div className='skill_icon'>
                                <GrReactjs size={60} />
                                <p>ReactJs</p>
                            </div>
                            <div className='skill_icon'>
                                <DiMongodb size={60} />
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </>
        );
    }


export default About;