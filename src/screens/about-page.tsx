import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook to navigate to other pages
import ScreenWrapper from '../components/screen-wrapper';
import './about-page.css';

function AboutPage() {
  const [clicked, setClicked] = useState(false); // State to manage the click event
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle "PRESS START" click
  const handleGlobe = () => {
    setClicked(true); // Start the animation

    // Delay for the effect duration, then navigate to the menu page
    setTimeout(() => {
      navigate(-1);
    }, 1000); // Adjust time to match the animation duration
  };
  return (
    <ScreenWrapper>
      <img
        className={`top-left-image ${clicked ? 'clicked' : ''}`}
        onClick={() => handleGlobe()}
        src="https://dwvo2npct47gg.cloudfront.net/gifs/awge-home.gif"
        alt="Home button spinning globe"
      />
      <div className="about-content-container">
        <span className="title">WHAT iS L.i.F.E. ?</span>
        <span className="answer">
          i want you to put on these pieces and feel like you can do anything
          you put your mind too. i know that just wearing a shirt won't give you
          power...or will it? maybe everything you've been learning is a lie.
          whats the downside of chasing your dreams? why are my pieces so
          special? who am i? does any of this even matter? i don't know much but
          I do know everyone has it inside of them to be whatever makes them
          happy. i am you and you are me. we are the universe. NEVER LET ANYONE
          TELL YOU WHAT YOUR L.i.F.E. iS AND iF SOMEONE ASKS... LiFE iS FOR
          EVERYONE!!!
        </span>
      </div>
    </ScreenWrapper>
  );
}

export default AboutPage;
