import Link from "next/link";
import styles from "../styles/Home.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";


export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Made By <Link href="/">Marty!</Link>
          <Image className={styles.pic} src={pic} alt="Picture of me" />
        </h1>

        <p className={styles.description}>
          <code>Interactive Software Engineer </code>
        </p>
        <div className={styles.grid}>
          <Link className={styles.card} href="/projects">
            <h3>
              Projects <span className={styles.icon}>&#9732;</span>
            </h3>
            <p>Applications & Websites worked on or created by me</p>
          </Link>

          <Link className={styles.card} href="/games">
            <h3>
              Games <span className={styles.icon}>&#9861;</span>
            </h3>
            <p>VR 3D and 2D built in Unity, Unreal, and more</p>
          </Link>

          <Link className={styles.card} href="/music">
            <h3>
              Music <span className={styles.icon}>&#9835;</span>
            </h3>
            <p>Music made for independent games and myself</p>
          </Link>

          <Link className={styles.card} href="/art">
            <h3>
              Art <span className={styles.icon}>&#9998;</span>
            </h3>
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
