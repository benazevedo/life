import React, { useEffect, useState } from 'react';
import './space-effect.css'; // Import the CSS we defined earlier

// Define the type for each star
interface Star {
  id: number;
  size: number;
  left: number;
  speed: number;
  delay: number;
}

const SpaceEffect: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]); // Type the state as an array of Star

  // Create stars with random positions and speeds
  useEffect(() => {
    const numStars = 400; // Adjust the number of stars
    const starsArray: Star[] = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.random() * 3 + 1; // Size between 1px and 5px
      const left = Math.random() * 100; // Random left position (percentage)
      const delay = Math.random() * 5; // Random delay to stagger the starts

      // Larger stars will have shorter duration (faster), smaller stars longer (slower)
      const speed = 35 - size * 5; // Example: Bigger stars move faster, smaller move slower

      starsArray.push({
        id: i,
        size,
        left,
        speed,
        delay,
      });
    }

    setStars(starsArray);
  }, []);

  return (
    <div className="space-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.speed}s`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default SpaceEffect;
