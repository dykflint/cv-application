import { useEffect } from 'react';
import { useState } from 'react';
export default function Picture({ imgLocation }) {
  const [imageSrc, setImageSsrc] = useState(imgLocation);
  const [hovered, setHovered] = useState(false);
  function handleChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    // console.log('Picture has been uploaded');

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImageSsrc(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  useEffect(() => {
    const picture = document.querySelector('.picture');
    const uploadInput = document.querySelector('.change-picture');

    const onMouseEnter = () => {
      setHovered(true);
      // I don't need to manually add or remove .hide because
      // setHovered does it because hovered in the ternary operator
      // does it (see below)
      // uploadInput.classList.remove('hide');
    };
    const onMouseLeave = () => {
      setHovered(false);
      // uploadInput.classList.add('hide');
    };
    const onEnteringUploadInput = () => {
      setHovered(true);
      picture.removeEventListener('mouseenter', onMouseEnter);
      picture.removeEventListener('mouseleave', onMouseLeave);
    };
    const onLeavingUploadInput = () => {
      setHovered(false);
      picture.addEventListener('mouseenter', onMouseEnter);
      picture.addEventListener('mouseleave', onMouseLeave);
    };
    const handleImageChange = () => {
      console.log('The picture has been changed.');
    };
    picture.addEventListener('load', handleImageChange);
    picture.addEventListener('mouseenter', onMouseEnter);
    picture.addEventListener('mouseleave', onMouseLeave);
    uploadInput.addEventListener('mouseenter', onEnteringUploadInput);
    uploadInput.addEventListener('mouseleave', onLeavingUploadInput);

    return () => {
      picture.removeEventListener('load', handleImageChange);
      picture.removeEventListener('mouseenter', onMouseEnter);
      picture.removeEventListener('mouseleave', onMouseLeave);
      uploadInput.removeEventListener('mouseenter', onEnteringUploadInput);
      uploadInput.removeEventListener('mouseleave', onLeavingUploadInput);
    };
  }, []);
  return (
    <div className="picture-container">
      <img className="picture" src={imageSrc} />
      <input
        type="file"
        className={`change-picture ${hovered ? '' : 'hide'}`}
        onChange={handleChange}
      ></input>
    </div>
  );
}
