import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
  return (
    <div className={styles.container}>
      <AboutMe />
    </div>
  );
}
