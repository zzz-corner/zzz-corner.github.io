import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ashishgiri12344@email.com">AshZzz@gmail.com.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/discordicon.png")} alt="Discord icon" />
          <a href="https://discord.com/channels/@me">thereal.ash</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/robloxicon.png")} alt="Roblox icon" />
          <a href="https://www.roblox.com/users/587460869/profile">Hebrew_Ashmedal</a>
        </li>
      </ul>
    </footer>
  );
};
