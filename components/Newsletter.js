import React from "react";
import styles from "@/styles/Home.module.css";

export const Newsletter = () => {
  return (
    <div className={styles.Newsletter}>
      <h3>
        Subscribe to our newsletter to be up to date with festival announcements
      </h3>

      <form>
        <label htmlFor="newsletterInput">
          <input
            placeholder="foo@example.com"
            id="newsletterInput"
            type="text"
            name="newsletterInput"
          ></input>
        </label>
        <button>Join</button>
      </form>
    </div>
  );
};
