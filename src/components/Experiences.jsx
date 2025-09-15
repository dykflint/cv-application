import { useState } from 'react';
import EditButton from './EditButton';
function AddExperience({ jobTitle, jobLocation, jobDescription, jobDuration }) {
  return (
    <div className="experience">
      <EditButton
        props={{
          jobTitle: 'Job Title:',
          jobLocation: 'Job Location:',
          jobDuration: 'Job Duration:',
        }}
      />
      <div className="experience-header">
        <div className="experience-title-location">
          <span className="job-title">{jobTitle}</span>
          <span className="job-location">{jobLocation}</span>
        </div>
        <span className="job-duration">{jobDuration}</span>
        <br />
      </div>
      <ul className="job-description">
        <li>{jobDescription}</li>
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
