import { useState } from 'react';
import InputField from './InputField';
import EditableField from './EditableField';

function AddEducation({ title, location, duration }) {
  return (
    <div className="education-container">
      <EditableField addClasses="education-title">{title}</EditableField>
      <InputField
        inputClass="education-location"
        initialvalue={location}
        inputPlaceholder="Location"
      />
      <InputField
        inputClass="education-duration"
        initialvalue={duration}
        inputPlaceholder="Duration"
      />
    </div>
  );
}

export default function Education() {
  return (
    <div className="education">
      <p className="section-title">Education</p>
      <AddEducation
        key="post-doc"
        title="Post-Doc in Theoretical Chemistry"
        location="Paderborn University"
        duration="2024-2025"
      />
      <AddEducation
        key="phd"
        title="PhD, Theoretical Chemistry"
        location="Paderborn University"
        duration="2019-2024"
      />
      <AddEducation
        key="physics-master"
        title="MSc, Physics"
        location="Bielefeld University"
        duration="2017-2019"
      />
      <AddEducation
        key="nanophysics-bachelor"
        title="BSc, Nanophysics"
        location="Bielefeld University"
        duration="2014-2017"
      />
    </div>
  );
}
