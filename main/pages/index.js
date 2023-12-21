import Head from "next/head";
import styles from "../styles/Home.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>MartyOS</title>
        <link rel="stylesheet" href="styles.css" />
        <link
          href="https://fonts.cdnfonts.com/css/common-pixel"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <style></style>
      </Head>

      <main>
        <h1 className={styles.title}>
          Made By <a href="https://nextjs.org">Marty!</a>
          <Image className={styles.pic} src={pic} alt="Picture of the author" />
        </h1>

        <p className={styles.description}>
          <code>Creative Software Engineer </code>
        </p>
        <div className={styles.grid}>
          <a href="https://martyos.netlify.app/" className={styles.card}>
            <h3>
              Projects <span className={styles.icon}>&#9732;</span>
            </h3>
            <p>Applications & Websites worked on or created by me</p>
          </a>

          <a href="https://martyos.netlify.app/games" className={styles.card}>
            <h3>
              Games <span className={styles.icon}>&#9861;</span>
            </h3>
            <p>VR 3D and 2D built in Unity, Unreal, and more</p>
          </a>

          <a href="https://martyos.netlify.app/music" className={styles.card}>
            <h3>
              Music <span className={styles.icon}>&#9835;</span>
            </h3>
            <p>Music made for independent games and myself</p>
          </a>

          <a href="https://martyos.netlify.app/blender" className={styles.card}>
            <h3>
              Art <span className={styles.icon}>&#9998;</span>
            </h3>
            <p>Some extra art I do from time to time</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN__GITHUB__MATRYOS_RESUME.PDF
        </a>
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
