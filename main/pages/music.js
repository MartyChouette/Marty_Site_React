import Link from "next/link";
import styles from "../styles/Music.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";
import bgsite from "../public/images/bgsite.png";
import { useEffect, useState } from "react";

export default function Music() {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  useEffect(() => {
    const handlePlay = (event) => {
      if (currentPlaying && currentPlaying !== event.target) {
        currentPlaying.pause();
      }
      setCurrentPlaying(event.target);
    };

    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
      audio.volume = 0.5;
      audio.addEventListener("play", handlePlay);
    });

    return () => {
      audios.forEach((audio) => {
        audio.removeEventListener("play", handlePlay);
      });
    };
  }, [currentPlaying]);

  const audioTracks = [
    {
      src: "gardungeon_down_in_the_dark.wav",
      title: "Down In The Dark",
      description:
        "Finding yourself in a hole you must explore and fight creatures of the deep.",
    },
    {
      src: "gardungeon_gameover.wav",
      title: "GameOver",
      description:
        "I'm sorry you didn't make it. Here's a song for your gameover.",
    },
    {
      src: "gardungeon_wander.wav",
      title: "Wander",
      description:
        "There's a lot of places to see, dungeons to explore. Be sure to bring your synth.",
    },
    {
      src: "beep2.wav",
      title: "Beep",
      description: "Sad retro videogame break beats. It's a thing, trust me.",
    },
    {
      src: "walls_alt.wav",
      title: "Walls Menu",
      description:
        "Esoteric shapes in an esoteric land. A moody ethereal song for the game 'WALLS'.",
    },
    {
      src: "fibintro.wav",
      title: "Fib Intro",
      description:
        "Song I made for my never created YouTube channel. Thought about judging old games instead of just making them.",
    },
    {
      src: "calm_piano.wav",
      title: "Dockside Piano",
      description:
        "Song for a student fishing game named 'DOCKSIDE'. Catch different fish for different restaurants before the festival.",
    },
    {
      src: "spell stew - downtime.wav",
      title: "Witchy Riffs",
      description:
        "A magical witchy tower defense game needed a matching soundtrack.",
    },
  ];

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
        <Link href="/"> &lArr; </Link>
          Music By{" "}
          <Link href="/">
            Marty!
          </Link>
          {/*<Link href="https://martyos.netlify.app/"><Image className={styles.pic} src={pic} alt="Picture of me" /></Link>*/}
        </h1>
        <p className={styles.description}>
          <code>Interactive Software Engineer </code>
        </p>
        <div className={styles.grid}>
          {audioTracks.map((track, index) => (
            <div key={index} className={styles.card}>
              <h2>{track.title}</h2>
              <audio controls>
                <source src={`../audio/${track.src}`} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
              <h3>{track.description}</h3>
            </div>
          ))}
          <div className={styles.card}>
            <Link href="http://beargatsby.com">
              <div>
                <Image
                  className={styles.bgsite}
                  src={bgsite}
                  alt="Band image"
                />
                <h3>
                  My personal band's music. Indie/bedroom rock recorded, mixed,
                  and mastered by me.
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
