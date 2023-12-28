import Link from "next/link";
import styles from "../styles/Games.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";
import Temper from "../public/images/tempercover.png";
import Walls from "../public/images/walls.png";
import Cube from "../public/images/cube.png";
import Pizza from "../public/images/purrfectpizza.png";
import Dock from "../public/images/dockside.png";
import Frost from "../public/images/fbcover.png";
import Slideshow from "../component/Slideshow";

export default function Games() {
  const temper = [Temper, Dock, Frost];
  const pizza = [Pizza, Dock, Frost];
  const dock = [Dock, Dock, Frost];
  const cube = [Cube, Dock, Frost];
  const frost = [Frost, Dock, Frost];
  const walls = [Walls, Dock, Frost];

  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Games By <Link href="/">Marty!</Link>
          <Link href="/">
            <Image className={styles.pic} src={pic} alt="Picture of me" />
          </Link>
        </h1>
        <p className={styles.description}>
          <code>Interactive Software Engineer </code>
        </p>
        <div className={styles.grid}>
          <Link className={styles.card} href="/projects">
            <h3>TEMPER</h3>

            <Slideshow images={temper} />

            <p>UNREAL</p>
          </Link>

          <Link className={styles.card} href="/games">
            <h3>PURRFECT PIZZA</h3>
            <Slideshow images={pizza} />
            <p>VR 3D and 2D built in Unity, Unreal, and more</p>
          </Link>

          <Link className={styles.card} href="/music">
            <h3>Dockside</h3>
            <Slideshow images={dock} />
            <p>Music made for independent games and myself</p>
          </Link>

          <Link className={styles.card} href="/art">
            <h3>Cube Dancing</h3>
            <Slideshow images={cube} />
            <p>Some extra art I do from time to time</p>
          </Link>

          <Link className={styles.card} href="/art">
            <h3>FrostByte</h3>
            <Slideshow images={frost} />
            <p>Some extra art I do from time to time</p>
          </Link>

          <Link className={styles.card} href="/art">
            <h3>Walls</h3>
            <Slideshow images={walls} />
            <p>Some extra art I do from time to time</p>
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
          MATRYOS
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
