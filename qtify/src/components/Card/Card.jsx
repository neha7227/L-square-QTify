import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";
// import data from "../data.json";
function Card({ data, type }) {
  // console.log(data, "data in Card");
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, songs, title, slug } = data;

        return (
          <>
            {/* <Tooltip title={`${songs.length} songs`} placement="top" arrow>*/}

            <Tooltip title={`${songs.length} songs`} placement="top" arrow>
              <a href={`/album/${slug}`}>
                <div className={styles.wrapper}>
                  <div className={styles.card}>
                    <img
                      className={styles.image}
                      src={image}
                      alt="album"
                      loading="lazy"
                    />
                    <div className={styles.banner}>
                      <Chip
                        label={`${follows} follows`}
                        size="small"
                        className={styles.chip}
                      />
                    </div>
                  </div>
                  <div className={styles.titleWrapper}>
                    <p>{title}</p>
                  </div>
                </div>
              </a>
            </Tooltip>
          </>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <>
            {/* <Tooltip title={`${songs.length} songs`} placement="top" arrow>*/}

            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img
                  className={styles.image}
                  src={image}
                  alt="album"
                  loading="lazy"
                />
                <div className={styles.banner}>
                  <div className={styles.pills}>
                    <p>{likes} Likes</p>
                  </div>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </>
        );
      }

      default:
        return <></>;
    }
  };

  return getCard(type);
}

export default Card;
