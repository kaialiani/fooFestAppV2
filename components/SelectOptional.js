import React, { useState } from "react";
import styles from "@/styles/Checkout.module.css";
import { v4 as uuidv4 } from "uuid";

function SelectOptional(props) {
  const [selectedOptional, setSelectedOptional] = useState([]);

  function handleClick(name, price, id) {
    const option = {
      name,
      price,
      type: "Optional",
      id,
    };

    if (props.products.some((product) => product["name"] === name)) {
      props.setProducts((old) =>
        old.filter((product) => {
          return product["name"] !== name;
        })
      );
    } else {
      props.setProducts((old) => old.concat(option));
    }

    /*   props.setProducts((old) => old.concat(option)); */

    console.log(props.products);
  }

  function handleSelected(selected) {
    if (selectedOptional.includes(selected)) {
      setSelectedOptional((old) => old.filter((item) => item !== selected));
    } else {
      setSelectedOptional((old) => old.concat(selected));
    }
  }

  return (
    <div className={styles.CampingTypeFlex}>
      <div
        className={styles.CampingType}
        style={{
          backgroundColor: selectedOptional.includes("green") ? "#DFFE00" : "",
          outline: selectedOptional.includes("green")
            ? "1.2px solid #1E1E1E"
            : "",
        }}
        onClick={() => {
          handleSelected("green");
          handleClick("Green Camping", 249, uuidv4());
        }}
      >
        <p>01</p>
        <img src="pics/green.svg" alt={`artist1`} />
        <h3>Green camping</h3>
        <p>
          The tents are made from recycled materials and FooFest loves
          sustainability.
        </p>
        <span className={styles.Price}>DKK 249,-</span>
      </div>
      <div
        className={styles.CampingType}
        style={{
          backgroundColor: selectedOptional.includes("setup") ? "#DFFE00" : "",
          outline: selectedOptional.includes("setup")
            ? "1.2px solid #1E1E1E"
            : "",
        }}
        onClick={() => {
          handleSelected("setup");
          handleClick("Set-up Service", 299, uuidv4());
        }}
      >
        <p>02</p>
        <img src="pics/tent.svg" alt={`artist1`} />
        <h3>Tent Set-up Service</h3>
        <p>
          The crew will set up tents for you. The tents are included in the
          price.
        </p>
        <span className={styles.Price}>DKK 299,-</span>
      </div>
    </div>
  );
}

export default SelectOptional;
