import Link from "next/link";
import styles from "../styles/Games.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";
import Temper from "../public/images/tempercover.png";
import Temper1 from "../public/gif/Temper1.gif";
import Temper3 from "../public/gif/Temper3.gif";
import Temper4 from "../public/gif/Temper4.gif";
import Walls from "../public/images/walls.png";
import Walls1 from "../public/gif/walls1.gif";
import Walls2 from "../public/gif/walls2.gif";
import Walls3 from "../public/gif/walls3.gif";
import Cube from "../public/images/cube.png";
import Cube1 from "../public/gif/dc1.gif";
import Cube2 from "../public/gif/dc2.gif";
import Cube3 from "../public/gif/dc3.gif";
import Pizza from "../public/images/purrfectpizza.png";
import Pizza1 from "../public/gif/purrfectpizza1.gif";
import Pizza2 from "../public/gif/purrfectpizza2.gif";
import Pizza3 from "../public/gif/purrfectpizza3.gif";
import Dock from "../public/images/dockside.png";
import Dock1 from "../public/gif/ds1.gif";
import Dock2 from "../public/gif/ds2.gif";
import Dock3 from "../public/gif/ds3.gif";
import Dock4 from "../public/gif/ds4.gif";
import Dock5 from "../public/gif/ds5.gif";
import Frost from "../public/images/fbcover.png";
import Frost1 from "../public/gif/fb1.gif";
import Frost2 from "../public/gif/fb2.gif";
import Frost3 from "../public/gif/fb3.gif";
import Slideshow from "../component/Slideshow";

export default function Games() {
  const temper = [Temper, Temper1, Temper3, Temper4];
  const pizza = [Pizza, Pizza1, Pizza2, Pizza3];
  const dock = [Dock, Dock1, Dock2, Dock3, Dock4, Dock5];
  const cube = [Cube, Cube1, Cube2, Cube3];
  const frost = [Frost, Frost1, Frost2, Frost3];
  const walls = [Walls, Walls1, Walls2, Walls3];

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          <Link href="/"> &lArr; </Link>
          Games By <Link href="/">Marty!</Link>
          
          <Link href="https://martyos.netlify.app/"><Image className={styles.pic} src={pic} alt="Picture of me" /></Link>
          
        </h1>
        <p className={styles.description}>
          <code>Interactive Software Engineer </code>
        </p>
        <h2 className={styles.h2}>hover over for preview</h2>
        <div className={styles.grid}>
          <Link
            className={styles.card}
            href="https://martychouette.itch.io/temper"
          >
            <h3>TEMPER</h3>

            <Slideshow images={temper} />

            <p>First foray into UNREAL for solo holloween game jam</p>
          </Link>

          <Link
            className={styles.card}
            href="https://github.com/PurrfectPizza/VRGame/tree/Purrfect_Pizza"
          >
            <h3>PURRFECT PIZZA</h3>
            <Slideshow images={pizza} />
            <p>
              Unity VR pizza making game, my contributions design, testing,
              general software engineering
            </p>
          </Link>

          <Link
            className={styles.card}
            href="https://sulfurous.itch.io/dockside"
          >
            <h3>Dockside</h3>
            <Slideshow images={dock} />
            <p>
              Small game dev Unity game, my contributions design, audio,
              composer
            </p>
          </Link>

          <Link
            className={styles.card}
            href="https://partial-insanity.itch.io/cube-dancing"
          >
            <h3>Cube Dancing</h3>
            <Slideshow images={cube} />
            <p>
              Cube rythm game, my contribution is score multiplier and gameplay
              UI
            </p>
          </Link>

          <Link
            className={styles.card}
            href="https://martychouette.itch.io/frostbyte-v01"
          >
            <h3>FrostByte</h3>
            <Slideshow images={frost} />
            <p>
              Small 2D maze game in Unity designed, programmed, composed by me
            </p>
          </Link>

          <Link
            className={styles.card}
            href="https://martychouette.itch.io/walls"
          >
            <h3>Walls</h3>
            <Slideshow images={walls} />
            <p>First game made, Unity, designed, programmed, composed by me</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          className={styles.a}
          href="https://www.linkedin.com/in/martyscott64/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        +
        <a
          className={styles.a}
          href="https://github.com/MartyChouette"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        +
        <a
          className={styles.a}
          href="https://martyos.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MARTYOS
        </a>
        +
        <Link
          className={styles.a}
          href="/marty_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME.PDF
        </Link>

        +
        <Link
          className={styles.a}
          href="https://soundcloud.com/marty_64"
          target="_blank"
          rel="noopener noreferrer"
        >
          SOUNDCLOUD
        </Link>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
        }

        .card {
          width: 500px;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
