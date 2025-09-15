import { forwardRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

// IDEA: instead of the editForm turn all text into inputs that can be changed.
// on Enter (or clicking away) it will then take the updated value(s)

function EditableInput({ labelName, initialValue, onInput }) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    // TODO: for the clean-up callback to hide the edit form
  }, []);

  return (
    <label>
      {labelName}
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </label>
  );
}

const EditForm = forwardRef(function EditForm(props, ref) {
  const [text, setText] = useState('');
  const { inputLabels } = props;
  function handleSubmit(e) {
    e.preventDefault(); // prevent default page reload
    console.log('Submitted');
  }
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="edit-form hide" ref={ref}>
      <form onSubmit={handleSubmit}>
        {inputLabels &&
          Object.entries(inputLabels).map(([key, label]) => (
            <EditableInput key={key} labelName={label} initialValue={text} onInput={handleChange} />
          ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

export default EditForm;
