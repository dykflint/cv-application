import { useState } from 'react';

export default function InputField({ inputPlaceholder, inputClass, type, initialvalue }) {
  const [value, setValue] = useState(initialvalue);
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <input
      type={type}
      placeholder={inputPlaceholder}
      className={inputClass}
      value={value}
      onChange={handleChange}
    />
  );
}
