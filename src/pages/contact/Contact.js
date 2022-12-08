import React from "react";
import icon from './images/Vector.svg';
import sunset from './images/Sunset.svg';
import Form from '../../components/Form';
import "./contact.css";

function Contact() {
  return (
    <div>
      <section className="container-main">
        <div className="row">
          <div className="col-12 col-sm-2 div-icon">
            <img src={ icon } alt="sunset" />
          </div>
          <div className="col-12 col-sm-10 div-somewhere-text">
            <img className="sunset-img" src={ sunset } alt="sunset" />
            <h1>It's 5pm somewhere</h1>
          </div>
        </div>
      </section>

      <section className="container-main">
        <div className="row">
          <div className="col-12 col-sm-10 div-contactus-text">
            <img className="sunset-img" src={ sunset } alt="sunset" />
            <h2>We're here ready 24/7 feel free to Contact us at anytime.</h2>
            <p>It's always 5pm somewhere. Get in touch with us and Find The best way below to reach us out, or fill up the form.</p>
            <button className="btn-start">Start a new project</button>
          </div>
        </div>
      </section>

      <section className="container-main">
        <Form />
      </section>
    </div>
  );
}

export default Contact;
