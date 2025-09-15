import { useState } from 'react';
import EditButton from './EditButton';
function AddLanguage({ language, fluency }) {
  return (
    <li className={language}>
      {language} ({fluency})
    </li>
  );
}

export default function Languages() {
  return (
    <div className="languages">
      <EditButton props={{ languages: 'Languages:' }} />
      <p className="section-title">Languages</p>
      <hr />
      <ul>
        <AddLanguage key="english" language="English" fluency="fluent" />
        <AddLanguage key="german" language="German" fluency="fluent" />
        <AddLanguage key="russian" language="Russian" fluency="fluent" />
        <AddLanguage key="spanish" language="Spanish" fluency="B1" />
      </ul>
    </div>
  );
}
