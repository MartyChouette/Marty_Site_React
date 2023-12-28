// components/Slideshow.js
import React, { useState, useEffect, useRef } from "react"; // Add useRef here
import styles from "../styles/Slideshow.module.css";
import Image from "next/image";


const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(); // useRef to manage the interval

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      console.log("New index:", newIndex); // Debugging line
      return newIndex;
    });
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startSlideshow = () => {
    console.log("Starting slideshow");
    intervalRef.current = setInterval(showNextImage, 2000);
  };

  const stopSlideshow = () => {
    console.log("Stopping slideshow");
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className={styles.slideshow}
      onMouseOver={startSlideshow}
      onMouseOut={stopSlideshow}
    >
      {images.map((imageSrc, index) => (
        <Image className={styles.games}
          key={`${imageSrc}-${index}`}
              src={imageSrc} // Directly use the image source
              width={270}
              height={190}
          alt={`Slide ${index}`}
          style={{ display: index === currentIndex ? "block" : "none" }}
        />
      ))}
    </div>
  );
};
export default Slideshow;
