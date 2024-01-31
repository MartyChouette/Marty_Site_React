import Link from "next/link";
import styles from "../styles/Art.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";
import ModelViewer from "../component/ModelViewer";
import earth from "../public/gif/earth 002.gif";
import elliot from "../public/images/elliott.png";

export default function Art() {
  return (
    <div className={styles.container}>
      <main>
        {/* Your existing slideshow and other content */}
        <h1 className={styles.title}>
        <Link href="/"> &lArr; </Link>
          Art By <Link href="/">Marty!</Link>
          <Link href="https://martyos.netlify.app/"><Image className={styles.pic} src={pic} alt="Picture of me" /></Link>
        </h1>
        <p className={styles.description}>
          <code>Interactive Software Engineer </code>
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Image className={styles.gif} src={earth} alt="my gif" />
            <p></p>
          </div>

          <div className={styles.card}>
            <ModelViewer objPath="obj/tv.obj" mtlPath="obj/tv.mtl" />
            <p>3D model drag to interact</p>
          </div>

          <div className={styles.card}>
            <ModelViewer objPath="obj/owl.obj" mtlPath="obj/owl.mtl" />
            <p>3D model drag to interact</p>
          </div>

          <div className={styles.card}>
            <ModelViewer
              objPath="obj/selfportrait2.obj"
              mtlPath="obj/selfportrait2.mtl"
            />
            <p>3D model drag to interact</p>
          </div>

          <div className={styles.card}>
            <h2>Punk is Dead</h2>
            <video className={styles.vid} width="75%" controls>
              <source src={"vid/punk is dead.mp4"} type="video/mp4" />
            </video>
            <p>Retro splash screen</p>
          </div>

          {/* <div className={styles.card}>
            <h2>Nobody Reads</h2>
            <video className={styles.vid} width="75%" controls>
              <source src={"vid/nobody.mp4"} type="video/mp4" />
            </video>
            <p>Retro splash screen</p>
          </div> */}

          <div className={styles.card}>
            <h2>Countdown</h2>
            <video className={styles.vid} width="75%" controls>
              <source src={"vid/countdown.mp4"} type="video/mp4" />
            </video>
            <p>Retro splash screen</p>
          </div>

          {/* <div className={styles.card}>
            <h2>FibLikley Intro Prototype</h2>
            <video className={styles.vid} width="75%" controls>
              <source src={"vid/vhs clean00er_1.mp4.mp4"} type="video/mp4" />
            </video>
            <p>Intro Test Video</p>
          </div>
          <div className={styles.card}>
            <h2>FibLikley Intro Prototype II</h2>
            <video className={styles.vid} width="75%" controls>
              <source src={"vid/vhs cleaner_6.mp4.mp4"} type="video/mp4" />
            </video>
            <p>Intro Test Video</p>
          </div> */}

          {/* <div className={styles.card}>
            <Image className={styles.pic_eliot} src={elliot} alt="my gif" />
            <p>Elliott Smith drawing</p>
          </div> */}
        </div>
      </main>
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
