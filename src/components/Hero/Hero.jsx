import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Zzz</h1>
        <p className={styles.description}>
        Hey there, I'm Ash, but you can also call me Ash - whichever floats your boat! I've got a whopping 5 years of experience under my belt in game development, programming, designing websites, and bunch of other stuff! Reach out if you're curious to learn more! 
        </p>
        <a href="mailto:ashishgiri12344@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroimage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
