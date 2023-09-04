import React from 'react';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Saroj 20BTRCS145 RESUME.pdf';
import './Home.css';
const Home = () => {
  return (
    <>
     <div className="container-fluid home-container" id="home">
      <div div className="container home-content">
        <h2>Hi 👋 i am a</h2>
        <h1> 
        <Typewriter
          options={{
          strings: ['Web Developer!',
           'Full Stack Developer!'],
          autoStart: true,
          loop: true,
         }}
        />
        </h1>
        <div className="home-buttons">
          <buttons className="btn btn-hire">Hire Me</buttons>
          <a className="btn btn-cv" href={Resume} download="Saroj_Resume.pdf">My Resume</a>
        </div>
        </div>  
     </div>
    </>
  )
}

export default Home
