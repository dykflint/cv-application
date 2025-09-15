import { useState } from 'react';
import EditButton from './EditButton';

function AddContactInformation({ contactType, logoLocation, information }) {
  return (
    <div className="contact-detail">
      <EditButton props={{ contactType: contactType }} />
      <span className="contact-logo">
        <img src={logoLocation} alt="" />
      </span>{' '}
      <span className="contact-information">{information}</span>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="contact">
      <p className="section-title">Contact</p>
      <hr />
      <AddContactInformation
        key="phone-number"
        contactType="Phone Number:"
        logoLocation="./src/assets/phone-solid.svg"
        information="+49 12345678901"
      />
      <AddContactInformation
        key="email"
        contactType="Email:"
        logoLocation="./src/assets/mail-solid.svg"
        information="example@example.com"
      />
      <AddContactInformation
        key="location"
        contactType="Location:"
        logoLocation="./src/assets/map-pin.svg"
        information="Paderborn, Germany"
      />
    </div>
  );
}
