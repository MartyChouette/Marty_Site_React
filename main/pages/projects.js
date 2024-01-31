import Link from "next/link";
import styles from "../styles/Projects.module.css";
import pic from "../public/selfportrait_beard.svg";
import Image from "next/image";
import ghunt from "../public/images/gamehunt.png";
import mcraft from "../public/images/minecraft.png";
import pss from "../public/images/pss.png";
import martyos from "../public/images/martyos.png";
import javafx from "../public/images/javafx.png";
import etracker from "../public/images/expensetracker.png";
import atm from "../public/images/atm.png";

export default function Games() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
        <Link href="/"> &lArr; </Link>
          Programs By <Link href="/">Marty!</Link>
          
          <Link href="https://martyos.netlify.app/"><Image className={styles.pic} src={pic} alt="Picture of me" /></Link>
          
        </h1>
        <p className={styles.description}>
          <code>Interactive Software Engineer </code>
        </p>
        <div className={styles.grid}>
          <Link className={styles.card} href="https://game-hunt.vercel.app/">
            <h3>
              <br />
              <br />
              <br />
              <br />
              GameHunt
            </h3>
            <Image
              className={styles.project_listing_pic}
              src={ghunt}
              alt="game hunt"
            />
            <p>
              Webervice site for following videogame sales from every major
              store front, my contribution frontend and API endpoints
            </p>
          </Link>

          <Link
            className={styles.card}
            href="https://github.com/meap02/CS4450_FinalProgram"
          >
            <h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              Minecraft Clone
            </h3>
            <Image
              className={styles.project_listing_pic}
              src={mcraft}
              alt="mcraft"
            />
            <p>
              Java and lwjgl my contribution half of the general development
            </p>
          </Link>

          <Link
            className={styles.card}
            href="https://github.com/JonathanPena17/PSS-Scheduling-Tool"
          >
            <h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              PSS Scheduling Program
            </h3>
            <Image
              className={styles.project_listing_pic_pss}
              src={pss}
              alt="PSS"
            />
            <p>Python & tkinter my contribution mainly frontend and design</p>
          </Link>

          <Link className={styles.card} href="https://martyos.netlify.app/">
            <h3>
              <br />
              <br />
              <br />
              <br />
              MartyOS
            </h3>
            <Image
              className={styles.project_listing_pic}
              src={martyos}
              alt="martyos"
            />
            <p>My previous portfolio website done in the style of win 98</p>
          </Link>

          <Link
            className={styles.card}
            href="https://github.com/mootene/JavaFX-Final-Proj"
          >
            <h3>
              <br />
              <br />
              <br />
              <br />
              <br />
              Redesigned JavaFX Site
            </h3>
            <Image
              className={styles.project_listing_pic}
              src={javafx}
              alt="javafx"
            />
            <p>site prototype redesign for yale art school site using JavaFX my contributions design and frontend</p>
          </Link>

          <Link
            className={styles.card}
            href="https://github.com/MartyChouette/expenseTracker"
          >
            <h3>
              <br />
              <br />
              <br />
              <br />
              Expense Tracker
            </h3>
            <Image
              className={styles.project_listing_pic}
              src={etracker}
              alt="Picture of me"
            />
            <p>simple CLI python expense tracking program with some visuals for pie chart of expenses</p>
          </Link>

          <Link
            className={styles.card}
            href="https://github.com/MartyChouette/atm"
          >
            <h3>
              <br />
              <br />
              <br />
              <br />
              ATM
            </h3>
            <Image
              className={styles.project_listing_pic}
              src={atm}
              alt="Picture of me"
            />
            <p>simple CLI C# atm program</p>
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
