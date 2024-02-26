// eslint-disable-next-line no-unused-vars
import React from 'react'

import { useState } from 'react'
import CarousalItem from './CarousalItem.jsx'
import './carousal.css'
import fashion from '../../assets/images/project/fashion.png'
import weather from '../../assets/images/project/weather.png'
import spotify from '../../assets/images/project/spotify.jpg'




function Carousal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
        index:1,
        title:'Weather App',
        description: "Revolutionizing weather tracking with a user-friendly app, offering real-time forecasts and a sleek design for effortless navigation",
        icon:`${weather}`,
        link:'https://github.com/Ankijit2/weatherapp'
    },
    {
        index:2,
        title:'Music Player',
        description: "Transform your tunes with my streamlined music player—effortless controls, sleek design, and personalized playlists for a harmonious listening experience.",
        icon:`${spotify}`,
        link:'https://github.com/Ankijit2/musicPlayer'
    },
    {
        index:3,
        title:'Shopping Site',
        description: "Elevate your shopping experience with my chic and user-friendly online platform. Discover curated selections, seamless navigation, and exclusive deals for a modern retail indulgence",
        icon:`${fashion}`,
        link:'https://github.com/Ankijit2/Shopping-site'
    },

]


  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);

  }

  return (
    <>
      <div className='flex items-center justify-center mt-12'>
        <div className="carousel md:w-[80vw] w-screen">
          <div className='shadow'>
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>

              {items.map((item, index) => {
                return (
                  <CarousalItem key={index} item={item} width="100%" />
                )
              })}


            </div>
          </div>
          <div className="carousal-buttons">
            <button className="carousal-button" onClick={() => { updateIndex(activeIndex - 1) }}>
              <span className="material-symbols-outlined" >
                arrow_back_ios
              </span></button>
            <div className='indicators'>
              {items.map((item, index) => {
                return (
                  <button key={index} className={activeIndex === index ? 'indicator active' : 'indicator'} onClick={() => { updateIndex(index) }}>

                    <span className="material-symbols-outlined">
                      {index === activeIndex ? "radio_button_checked" : "radio_button_unchecked"}
                    </span>

                  </button>
                );
              })}


            </div>
            <button className="button-arrow" onClick={() => {
              updateIndex(activeIndex + 1);
            }}>
              <span className="material-symbols-outlined">arrow_forward_ios</span>
            </button>

          </div>
          <a href="https://github.com/Ankijit2" target="_blank" rel="noopener noreferrer" className='grid place-items-center'><button className="buttons button1">View More</button></a>
        </div>
      </div>
    </>
  )
}

export default Carousal
