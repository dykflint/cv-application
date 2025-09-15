import { useState } from 'react';
import '../styles/App.css';
import Name from './Name';
import Profile from './Profile';
import Experiences from './Experiences';
import TechSkills from './TechSkills';
import Contact from './Contact';
import Languages from './Languages';
import Education from './Education';
import SoftSkills from './SoftSkills';
import Picture from './Picture';
import EditForm from './EditForm';

function App() {
  return (
    <div className="cv">
      <div className="cv-sidebar">
        <Picture imgLocation="./src/assets/sakuragi-hanamichi.jpg" />
        <Contact />
        <Languages />
        <Education />
        <SoftSkills />
      </div>
      <div className="cv-body">
        <Name firstName="Konstantin" lastName="Tamoev" />
        <Profile />
        <Experiences />
        <TechSkills />
      </div>
    </div>
  );
}

export default App;
