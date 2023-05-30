import styles from "@/styles/CampingArea.module.css";
import React from "react";

export default function CampingArea(props) {
  function handleClick() {
    if (props.products.some((product) => product["type"] === "Camping")) {
      const campingInfo = props.products.map((product) => {
        if (product.type === "Camping") {
          return { ...product, name: props.area, id: props.id };
        }
        return product;
      });

      props.setProducts(campingInfo);
    } else {
      props.setProducts((old) => old.concat(props.selectedCamping));
    }
  }

  return (
    <div
      className={styles.CampingArea}
      style={{
        backgroundColor: props.selectedCamping.name === props.area ? "#E3FFB7" : "",
        border: props.selectedCamping.name === props.area ? "3px solid black" : "",
      }}
      onClick={() => {
        props.setSelectedCamping({ name: props.area, type: "Camping", id: props.id });

        handleClick();
      }}
    >
      <h2>{props.area}</h2>
      <p>{props.available} Available</p>
    </div>
  );
}
