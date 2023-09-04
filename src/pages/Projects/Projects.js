import React from 'react'
import './Projects.css'
import swaad_ka_safar from'../../assets/images/Swaad ka safar.png'
const Projects = () => {
  return (
    <>
     <div className="container project" id="project">
     <h2 className="col-12 mt-3 mb-1 text-center ">Recent Projects</h2>
    <hr />
    <p className="pb-3 text-center">
      👉 This page contain project that i have done. 
      </p>
      <div className="row"id="ads">
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                   <span className="card-notify">static web page</span>
                <img src={swaad_ka_safar}alt="Project1"/>
                </div>
                <div className="card-image-overly">
                    <span className="card-detail-badge">HTML</span>
                    <span className="card-detail-badge">CSS</span>
                </div>
                <div className="card-body">
                    <div className="ad-title">
                        <h5 className="text-uppercase">
                            swaad ka safar
                        </h5>
                       
                    </div>
                </div>
            </div>
        </div>
      </div>
     </div>
    </>
  )
}

export default Projects

