import React from 'react'
import "./Contact.css";
import contact_me from '../../assets/images/contact me.png';
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact detail">
        <div className="card card0 border-0">
            <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6 col-sl-10">
                    <div className="card1">
                        <div className="row">
                            <div className="row border-line">
                            <img src={contact_me} alt="contact_me"
                            className="image"/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-md-8 col-lg-6">
                <div className="elements">
                    
                   <h6>Enter your detail</h6>
                   <br></br>
                    <div className="row px-3">
                        <input type="text" 
                        name="name" 
                        placeholder="Enter your name" 
                        className='mb-3'/>
                    </div>
                    <div className="row px-3">
                        <input type="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className='mb-3'/>
                    </div>
                    <div className="row px-3">
                        <textarea
                         type="text" 
                        name="msg" 
                        placeholder="Write your message" 
                        className='mb-3'/>
                    </div>
                    <div className="row px-3">
                       <button className="" type="submit">SEND MESSAGE</button>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact

