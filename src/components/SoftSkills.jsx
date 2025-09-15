import { useState } from 'react';
import EditButton from './EditButton';

function AddSoftSkill({ skill }) {
  return <li>{skill}</li>;
}

export default function SoftSkills() {
  return (
    <div className="soft-skills">
      <EditButton props={{ softSkills: 'Soft Skills:' }} />
      <p className="section-title">Soft Skills</p>
      <ul key="soft-skills">
        <AddSoftSkill key="scientific-programming" skill="Scientific Programming" />
        <AddSoftSkill key="project-management" skill="Project Management" />
        <AddSoftSkill key="problem-solving" skill="Problem Solving" />
        <AddSoftSkill key="data-analysis" skill="Data Analysis" />
        <AddSoftSkill key="full-stack-solutions" skill="Full-Stack Solutions" />
        <AddSoftSkill key="strategic-planning" skill="Strategic Planning" />
      </ul>
    </div>
  );
}
