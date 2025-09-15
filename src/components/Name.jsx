import { useState } from 'react';
import EditButton from './EditButton';
import EditForm from './EditForm';
import Title from './Title';

export default function Name({ firstName, lastName }) {
  return (
    <div className="name-and-title">
      {/* <EditButton
        section=".name-and-title"
        props={{ firstName: 'First Name:', lastName: 'Last Name:', title: 'Title:' }}
      />*/}
      {/* <EditForm />*/}
      <p className="name">
        <input className="first-name" value={firstName} />
        <br /> <input className="last-name" value={lastName} />
      </p>
      <Title title="Physicist turned Software Developer, PhD" />
      <hr className="short" />
    </div>
  );
}
