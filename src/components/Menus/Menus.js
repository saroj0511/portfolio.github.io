import React from 'react'
import './Menus.css';
import { Link} from 'react-scroll'
import profilePic from '../../assets/images/profile-pic.jpg.jpg';
import {FcAbout, FcBiotech,  FcContacts, FcHome, FcReading} from 'react-icons/fc'
import { AiFillProject } from 'react-icons/ai';

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
    <>
        <div className="navebar-profile-pic">
        <img src={profilePic} alt="profile pic" />
      </div>
      <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
               <FcHome/>
                Home 
              </Link>
                
            </div>
            <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout/>
                About
                </Link>
            </div>
            <div className="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                <FcReading/>
                Education
                </Link>
            </div>
            
            <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech/>
                Tech stack
                </Link>
            </div>
            <div className="nav-link">
                <Link to="project" spy={true} smooth={true} offset={-100} duration={100}>
                <AiFillProject/>
                Project
                </Link>
            </div>
           
            
            <div className="nav-link">
                <Link to="contact detail" spy={true} smooth={true} offset={-100} duration={100}>
                <FcContacts/>
                Contact  
                </Link>
            </div>
            
            
        </div>
        
      </div>
    </>
    ) : (
        <>
        
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
                <FcHome title="Home"/>
               
            </div>
            <div className="nav-link">
                <FcAbout title="About"/>
              
            </div>
            <div className="nav-link">
                <FcReading title="Education"/>
               
            </div>
            <div className="nav-link">
                <FcBiotech title="Techstack"/>
               
            </div>
            <div className="nav-link">
                <AiFillProject title="project"/>
               
            </div>
            
            
            <div className="nav-link">
                <FcContacts title="Contact"/>
                
            </div>
            
        </div>
        </div>
        </> 
    )}
      
    </>
  );
};

export default Menus
