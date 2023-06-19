import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Lineup.module.css";

export default function ArtistPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    const fetchArtistData = async () => {
      try {
        const response = await fetch(
          `https://tan-chipped-baboon.glitch.me/bands/${slug}`
        );
        const jsonData = await response.json();
        setArtistData(jsonData);
      } catch (error) {
        console.error("Error fetching artist data:", error);
      }
    };

    if (slug) {
      fetchArtistData();
    }
  }, [slug]);

  if (!artistData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.artistInfoFlex}>
      <div className={styles.artistInfo}>
        <h2>{artistData.name}</h2>
        <h3>{artistData.genre}</h3>
        <div className={styles.bandMembers}>
          {artistData.members.map((member, index) => (
            <h4 key={index}>{member}</h4>
          ))}
        </div>
        <p>{artistData.bio}</p>
      </div>

      <img
        src={`https://tan-chipped-baboon.glitch.me/logos/${artistData.logo}`}
        alt={artistData.name}
        className={styles.artistImage}
      />
    </div>
  );
}
