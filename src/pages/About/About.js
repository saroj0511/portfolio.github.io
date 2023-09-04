import React from 'react'
import './About.css'
import profilepic from'../../assets/images/profile-pic.jpg.jpg'
const About = () => {
  return (
    <>
    <div className="about" id="about">
     <div className="row">
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-image">
        <div className="image-box">
        <img src= {profilepic} alt="profile_pic"/>
        </div>
       </div>
      <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
        <h1>About me</h1>
        <p>
        Hello, I'm Saroj Kumar (USN: 20BTRCS145), a dedicated and aspiring web developer currently in my fourth year pursuing a B.Tech in Computer Science and Engineering at Jain University. With a passion for technology and a keen eye for design, I'm determined to contribute my skills to the world of web development.

Throughout my academic journey, I've honed a strong foundation in programming languages, algorithms, and software engineering principles. My time at Jain University has exposed me to various facets of computer science, fostering my curiosity and drive to create innovative digital experiences.

Web development has captured my interest due to its dynamic nature and endless creative possibilities. I've embraced front-end and back-end technologies, HTML, CSS, JavaScript, and more, to craft responsive and engaging websites. My enthusiasm for user-centered design pushes me to ensure seamless and intuitive user interactions.

As I embark on my journey as a web developer, I'm excited to blend my technical expertise with my passion for creating user-centric, visually appealing web applications. With each project I undertake, I strive to not only solve problems but also deliver impactful experiences that resonate with users.

I'm actively seeking opportunities to contribute to web development projects, collaborate with like-minded individuals, and continue my growth in this ever-evolving field. Let's connect and explore the endless possibilities that the digital world offers.


        </p>
        </div> 
     </div>   
    </div>
      
    </>
  )
}

export default About
