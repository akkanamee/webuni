import React, { useState } from 'react';

const linksURL = [
  'https://nupp.edu.ua/uploads/files/0/main/deps/faculty/sport-faculty/kaf-fks/events/323444823_1496429050767183_3873949571368846909_n.jpg',
  'https://nupp.edu.ua/uploads/files/0/main/deps/faculty/sport-faculty/kaf-fks/events/326586766_916281946218758_6319500389342688342_n.jpg',
  'https://nupp.edu.ua/uploads/files/0/main/deps/faculty/sport-faculty/kaf-fks/events/326267352_1019306719457966_7203871980942726027_n.jpg',
  'https://nupp.edu.ua/uploads/files/0/main/deps/faculty/sport-faculty/kaf-fks/events/316667477_1008816670050939_5928567721463936315_n.jpg',
  'https://nupp.edu.ua/uploads/files/0/main/deps/faculty/sport-faculty/kaf-fks/events/315367583_1005565667042706_8611427564452806108_n.jpg',
  'https://nupp.edu.ua/uploads/files/0/main/deps/faculty/sport-faculty/kaf-fks/events/314897933_3177987949179336_8455398375425696908_n.jpg',
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftButtonClick = () => {
    if (currentSlide != 0){ 
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleRightButtonClick = () => {
    if (currentSlide != linksURL.length-1){  
      setCurrentSlide(currentSlide + 1);
    } 
  };

  return (
    <section className="slider">
      <h1 className='sliderTitle'>Фото Галерея</h1>
      <div className='sliderContainer'>
        <button 
          onClick={handleLeftButtonClick}
          disabled={currentSlide === 0}
          className='sliderButton'
        >
          {'<'}
        </button>
        <img 
          src={linksURL[currentSlide]}
          className="sliderPhoto"  
        />
        <button 
          onClick={handleRightButtonClick}
          disabled={currentSlide === linksURL.length-1}
          className='sliderButton'
        >
          {'>'}
        </button>
      </div>
    </section>
  )
};
