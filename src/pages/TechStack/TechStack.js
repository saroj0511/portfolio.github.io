import React from 'react';
import './TechStack.css';
import { TechStackList } from '../../Utils/TechStackList';
const TechStack = () => {
  return (
    <>
    <div className= "container TechStack" id="techstack">
    <h2 className="col-12 mt-3 mb-1 text-center ">Technologies Stack</h2>
    <hr />
    <p className="pb-3 text-center">
      👉This page contains all the languages that I am familiar with, although I am not an expert in any and am still in the process of learning.
      </p>
    <div className="column">
      {TechStackList.map((tech) => (
      <div key={tech._id}className="col-md-3">
        <div className="card m-2"> 
        <div className="card-content">  
        <div className="card-body">
          <div className="media d-flex justify-content-center">
            <div className="alig-self-center">
            <tech.icon className="tech-icon"/>
            </div>
          <div className="media-body">
            <h5>{tech.name}</h5>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>    
     ) )}
    </div>
    </div>
    </>
    
  )
};

export default TechStack;
