import { useState } from 'react';
import EditableField from './EditableField';
export default function Profile() {
  return (
    <div className="profile">
      <p className="section-title">Profile</p>
      <hr />
      <EditableField
        data-placeholder="Write something here..." // not working because it's not completely empty (<br>)
        addClasses="profile-description"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        I started out studying nanophysics, which is basically physics, but smaller. Then I did a
        master’s in physics proper, and eventually a PhD in theoretical chemistry — which, despite
        the name, involves quite a lot of physics too. Along the way, I learned how to bend large
        computers to my will, mostly with Python, Fortran, and Bash. Somewhere in there, I
        discovered front-end development, and it turns out writing code for people is every bit as
        satisfying as writing code for particles. Now I want to bring the same mixture of precision,
        clarity, and well-tested elegance to modern web applications - the kind of systems that
        behave themselves, even when no one is looking.
      </EditableField>
    </div>
  );
}
