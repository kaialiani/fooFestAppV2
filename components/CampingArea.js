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

    console.log(props.products);
  }

  const isAvailable = props.available > 0;

  return (
    <div
      className={`${styles.CampingArea} ${isAvailable ? "" : styles.disabled}`}
      style={{
        backgroundColor:
          props.selectedCamping.name === props.area ? "#DFFE00" : "",
        cursor: isAvailable ? "pointer" : "not-allowed",
        pointerEvents: isAvailable ? "auto" : "none",
      }}
      onClick={() => {
        props.setSelectedCamping({
          name: props.area,
          type: "Camping",
          id: props.id,
        });

        handleClick();
      }}
    >
      <h2>{props.area}</h2>
      <p>
        {props.available}/{props.spots} Available
      </p>
    </div>
  );
}
