import React, { useEffect, useState } from 'react';
import './space-effect.css'; // Import the CSS we defined earlier

// Define the type for each star
interface Star {
  id: number;
  size: number;
  horizontal: number;
  vertical: number;
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
      const horizontal = Math.random() * 100; // Random left position (percentage)
      const vertical = Math.random() * 100; // Random initial vertical position
      const delay = Math.random() * 5; // Random delay to stagger the starts
      const speed = 35 - size * 5; // Larger stars move faster, smaller move slower

      starsArray.push({
        id: i,
        size,
        horizontal,
        vertical,
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
            left: `${star.horizontal}%`,
            top: `${star.vertical}%`,
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
