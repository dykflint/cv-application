import { useState } from 'react';
import InputField from './InputField';
import EditableField from './EditableField';
function AddExperience({ jobTitle, jobLocation, jobDescription, jobDuration }) {
  return (
    <div className="experience">
      <div className="experience-header">
        <div className="experience-title-location">
          <InputField
            inputClass="job-title"
            inputPlaceholder="Job"
            initialvalue={jobTitle}
          ></InputField>
          <InputField
            inputClass="job-location"
            inputPlaceholder="Job location"
            initialvalue={jobLocation}
          ></InputField>
        </div>
        <InputField
          inputClass="job-duration"
          inputPlaceholder={'mm.yyyy-mm.yyyy'}
          initialvalue={jobDuration}
        ></InputField>
        <br />
      </div>
      <ul className="job-description">
        <li>
          <EditableField>{jobDescription}</EditableField>
        </li>
      </ul>
    </div>
  );
}

export default function Experiences() {
  return (
    <div className="experiences">
      <p className="section-title">Experience</p>
      <hr />
      <AddExperience
        key="post-doc"
        jobTitle="Postdoctoral Researcher"
        jobDuration="08.2024-07.2025"
        jobDescription="Extended quantum chemistry frameworks, mentored junior
      researchers, and made sure the code ran smoothly and efficiently."
        jobLocation="Paderborn University"
      />
      <AddExperience
        key="front-end-dev"
        jobTitle="Front-End Developer"
        jobDuration="08.2021-11.2023"
        jobDescription="Built and maintained interactive language-learning tools. Wrote
        code that not only worked, but also looked like it worked. Made the
        UI responsive so it behaved nicely on laptops, tablets, and the
        occasional stubborn phone."
        jobLocation="SmarterGerman, Berlin"
      />
      <AddExperience
        key="doctoral-researcher"
        jobTitle="Doctoral Researcher"
        jobDuration="10.2019-07.2024"
        jobDescription="Implemented the SCAN meta-GGA functional in a PAW formalism —
        a sentence that will mean a lot if you’re into computational materials
        science, and very little if you’re not. Wrote thousands of lines of
        Python, Fortran, and Bash to automate simulations and analysis."
        jobLocation="Paderborn University"
      />
    </div>
  );
}
