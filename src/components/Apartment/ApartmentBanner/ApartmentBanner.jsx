import React, { useState } from 'react'
import "../ApartmentBanner/ApartmentBanner.scss"

function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);
  
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };
  return (
    <div className="Carrousel">
      <div className='imageContainer'>
        { pictures.map((pic, i) => (
          <img key={pic} src={pic} alt='' className={getClassName(i)}></img>
          ))}
      </div>
      <button className="btn btn-next" onClick={moveToNext}><i className='fas fa-chevron-left'></i></button>
      <button className="btn btn-previous" onClick={moveToPrevious}><i className='fas fa-chevron-right'></i></button>
    </div>
  );
}

export default ImageBanner