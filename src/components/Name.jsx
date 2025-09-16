import { useState } from 'react';
// import EditButton from './EditButton';
// import EditForm from './EditForm';
// import Title from './Title';
import InputField from './InputField';

export default function Name({ firstName, lastName }) {
  return (
    <div className="name-and-title">
      <p className="name">
        <InputField
          type="text"
          inputPlaceholder="First Name"
          initialvalue=""
          inputClass="first-name"
        />
        <br />
        <InputField
          type="text"
          inputPlaceholder="Last Name"
          initialvalue=""
          inputClass="last-name"
        />
        <InputField
          type="text"
          inputPlaceholder="Title"
          initialvalue="Physicist turned Software-Developer, PhD"
          inputClass="title"
        />
      </p>
      <hr className="short" />
    </div>
  );
}

{
  /* <EditButton
  section=".name-and-title"
  props={{ firstName: 'First Name:', lastName: 'Last Name:', title: 'Title:' }}
/>*/
}
{
  /* <EditForm />*/
}
