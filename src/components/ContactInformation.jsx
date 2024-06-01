import React from 'react'
import './ContactInformation.css'
import email from '../assets/images/email.png'
import phone from '../assets/images/call.png'
import map from '../assets/images/map.png'


const ContactInformation = () => {
  return (
    <div className="contact-page">
        <h2>Contact Us</h2>
        <div className="contact-info">
            <div className="info-item">
                <img src={map} alt="" />
                <p>123 Innovation Avenue, Virtual Reality City, VR1234</p>
            </div>
            <div className="info-item">
                <img src={phone} alt=""  />
                <p>Phone: +1 (123) 456-7890</p>
                <p>Toll-Free: 1-800-VR-PRO</p>
            </div>
            <div className="info-item">
                <img src={email} alt="" />
                <p>Email: info@innovatechvrpro.com</p>
                <p>Support: support@innovatechvrpro.com</p>
            </div>
        </div>
    </div>
  )
}

export default ContactInformation