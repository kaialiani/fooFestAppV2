import styles from "@/styles/CampingArea.module.css";
import React from "react";

export default function CampingArea(props) {
  function handleClick() {
    const selectedCamping = {
      name: props.area,
      type: "Camping",
      id: props.id,
    };

    if (props.selectedCamping.name === props.area) {
      props.setSelectedCamping({
        name: "",
        type: "Camping",
        id: "",
      });

      props.setProducts((old) =>
        old.filter((product) => product.id !== props.id)
      );
    } else {
      if (props.products.some((product) => product.type === "Camping")) {
        const campingInfo = props.products.map((product) => {
          if (product.type === "Camping") {
            return { ...product, name: props.area, id: props.id };
          }
          return product;
        });

        props.setProducts(campingInfo);
      } else {
        props.setProducts((old) => old.concat(selectedCamping));
      }

      props.setSelectedCamping(selectedCamping);
    }
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
