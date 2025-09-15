import { useRef, useEffect } from 'react';
import { useState } from 'react';
import EditForm from './EditForm';
// if hovered on the body part of the CV it will be hovering
// top right and top left otherwise

export default function EditButton({ section, props }) {
  const buttonRef = useRef(null);
  const formRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  // useEffect for hovering over the parent folder
  useEffect(() => {
    const buttonEl = buttonRef.current;
    if (!buttonEl) return;

    // Access parent element of the button
    const parent = buttonEl.parentElement;
    if (!parent) return;

    // Add hover listeners on parent
    const onMouseEnter = () => {
      setHovered(true);
      parent.classList.add('hovered');
    };
    const onMouseLeave = () => {
      setHovered(false);
      parent.classList.remove('hovered');
    };

    parent.addEventListener('mouseenter', onMouseEnter);
    parent.addEventListener('mouseleave', onMouseLeave);

    // Cleanup for the current rendering. It restarts with the next render?
    return () => {
      parent.removeEventListener('mouseenter', onMouseEnter);
      parent.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // useEffect for letting the EditForm appear
  useEffect(() => {
    const buttonEl = buttonRef.current;
    const editForm = formRef.current;
    if (!buttonEl || !editForm) return;
    // Access the EditForm
    const onMouseEnter = () => {
      console.log('onMouseEnter');
      editForm.classList.remove('hide');
    };
    const onMouseLeave = () => {
      console.log('onMouseLeave');
      editForm.classList.add('hide');
    };
    const onEditClick = () => {
      console.log('button');
      editForm.classList.remove('hide');
    };
    editForm.addEventListener('mouseenter', onMouseEnter);
    editForm.addEventListener('mouseleave', onMouseLeave);
    buttonEl.addEventListener('click', onEditClick);
    // Cleanup eventListeners
    return () => {
      editForm.removeEventListener('mouseenter', onMouseEnter);
      editForm.removeEventListener('mouseleave', onMouseLeave);
      buttonEl.removeEventListener('click', onEditClick);
    };
  }, []);
  return (
    <>
      <EditForm ref={formRef} inputLabels={props} />
      <button ref={buttonRef} className={`edit-button ${hovered ? '' : 'hide'}`}>
        Edit
      </button>
    </>
  );
}
