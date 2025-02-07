import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Lineup.module.css";
import { useState, useEffect } from "react";

export default function LineUp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tan-chipped-baboon.glitch.me/bands"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>fooFest</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <h1>
          {" "}
          <span className={styles.written}>Featured</span> Artists
        </h1>
      </div>
      <div className={styles.gridImages}>
        <img src="pics/artist1.webp" alt={`artist1`} />
        <div className={styles.hidden}>&nbsp;</div>
        <img src="pics/artist2.webp" alt={`artist2`} />
        <div className={styles.grey}>&nbsp;</div>
        <img src="pics/artist3.webp" alt={`artist3`} />
        <div className={styles.blue}>&nbsp;</div>
        <div className={styles.hidden}>&nbsp;</div>
        <img src="pics/artist4.webp" alt={`artist4`} />
        <div className={styles.yellow}>&nbsp;</div>
        <img src="pics/artist5.webp" alt={`artist5`} />
        <div className={styles.hidden}>&nbsp;</div>
        <img src="pics/artist6.webp" alt={`artist6`} />
      </div>

      <div className={styles.wrapper}>
        <h1 className={styles.lineup}>LINE-UP</h1>
        <h4>01.01 ⸺ 31.21.2023</h4>
        <div className={styles.artistLineup}>
          <div className={styles.hidden}> &nbsp; </div>
          <div>
            {data.slice(0, 80).map((item) => (
              <h4 className={styles.rightAligned} key={item.id}>
                <Link href={`/${item.slug}`} passHref>
                  {item.name} &nbsp;
                </Link>
                /&nbsp;
              </h4>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
