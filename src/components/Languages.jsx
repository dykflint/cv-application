import { useState } from 'react';
import InputField from './InputField';

function AddLanguage({ language, fluency }) {
  return (
    <li className={language}>
      <InputField initialvalue={`${language} (${fluency})`} />
    </li>
  );
}

export default function Languages() {
  return (
    <div className="languages">
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
