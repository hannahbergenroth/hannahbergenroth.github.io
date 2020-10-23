import React, { Component } from 'react';
import Pdf from '../CV_eng (2).pdf';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="about" >
            <div className="row" style={{ "margin": "0 auto", "font-family": "opensans-regular, sans-serif" }}>
               <div className="seven columns main-col">
                  <h2>About Me</h2>

                  <p style={{ "font-size": "15px" }}>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Me</h2>
                        <p className="address" style={{ "font-size": "15px", "font-family": "opensans-regular, sans-serif" }}>
                           <span>{name}</span><br />
                           <span>{street}<br />
                              {zip} {city}
                           </span><br />
                           <span>{phone}</span><br />
                           <a style={{ color: "#949494" }} href={"mailto:" + email}>hannahbergenroth@gmail.com</a>
                        </p>
                     </div>
                     <div className="columns download">
                        <p style={{ "width": "100%" }}>

                           <a href={Pdf} style={{ "float": "right", "text-decoration": "none" }} className="button" target="_blank">Show Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
               <div className="five columns">
                  <img className="profile-pic" src={profilepic} alt="Hannah Bergenroth Profile Pic" />
               </div>
            </div>


         </section>
      );
   }
}

export default About;