import { useState } from 'react';
import EditButton from './EditButton';
export default function Profile() {
  return (
    <div className="profile">
      <EditButton section=".profile" props={{ profileDescription: 'Profile Description:' }} />
      <p className="section-title">Profile</p>
      <hr />
      <p className="profile-description">
        I started out studying nanophysics, which is basically physics, but smaller. Then I did a
        master’s in physics proper, and eventually a PhD in theoretical chemistry — which, despite
        the name, involves quite a lot of physics too. Along the way, I learned how to bend large
        computers to my will, mostly with Python, Fortran, and Bash. Somewhere in there, I
        discovered front-end development, and it turns out writing code for people is every bit as
        satisfying as writing code for particles. Now I want to bring the same mixture of precision,
        clarity, and well-tested elegance to modern web applications - the kind of systems that
        behave themselves, even when no one is looking.
      </p>
    </div>
  );
}
