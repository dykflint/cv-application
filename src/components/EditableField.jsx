export default function EditableField({ children, addClasses }) {
  return (
    <div
      className={` ${addClasses} editable`}
      contentEditable={true}
      suppressContentEditableWarning={true}
    >
      {children}
    </div>
  );
}
