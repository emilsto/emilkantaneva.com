import styles from "../styles/Home.module.css";
import Link from "next/link";
import AboutMe from "../components/AboutMe/AboutMe";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className="flex justify-center">
        <AboutMe />
      </div>
    </div>
  );
}
