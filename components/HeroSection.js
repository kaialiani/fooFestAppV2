import React from "react";

import Link from "next/link";

import styles from "@/styles/Home.module.css";

export const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <img className={styles.heroImage} src="pics/home.webp" alt={`artist1`} />
      <p className={styles.coordinates}>61.8926° N, 6.9118° W</p>
      <div className={styles.heroTextContainer}>
        <div className={styles.heroText}>
          <div className={styles.writtenFoo}>
            <div className={styles.lineText}>
              <h3>
                THE <div className={styles.writtenNew}>new </div>MUSIC FESTIVAL
              </h3>
            </div>
            <h1 className={styles.writtenFoo}>‘foo’</h1>
          </div>
        </div>
      </div>
      <p className={styles.dates}>01.01 ⸺ 31.12.2023</p>
      <Link href="./tickets">
        {" "}
        <p className={styles.buyTickets}>
          <div className={styles.writtenBuy}>Buy </div>Tickets →
        </p>
      </Link>
    </div>
  );
};
