import { useLayoutEffect, useState } from 'react';
import EditButton from './EditButton';

function AddSkill({ category, skills }) {
  return (
    <ul className="tech-category">
      <EditButton props={{ techCategory: 'Category: ', skills: 'Skills:' }} />
      <li>
        {category}
        <ul className="tech-skills">
          <li>{skills}</li>
        </ul>
      </li>
    </ul>
  );
}

export default function TechSkills() {
  return (
    <div className="technical-skills">
      <p className="section-title">Technical Skills</p>
      <hr />
      <AddSkill
        key="web-skills"
        category="Web"
        skills="HTML5, CSS3, JavaScript (ES6+), React, Node.js"
      />
      <AddSkill
        key="programming-skills"
        category="Programming"
        skills="Python, Fortran, Bash, Git"
      />
      <AddSkill key="tools-skills" category="Tools" skills="Docker, Linux, REST APIs, Webpack" />
      <AddSkill
        key="scientific-skills"
        category="Scientific"
        skills="High-Performance computing, numerical analysis, simulation pipeliens"
      />
    </div>
  );
}
