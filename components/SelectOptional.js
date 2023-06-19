import React, { useState } from "react";
import styles from "@/styles/Checkout.module.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { StoreContext } from "@/contexts/storeContext";

function SelectOptional(props) {
  const [selectedOptional, setSelectedOptional] = useState([]);
  const { data } = useContext(StoreContext);
  const { basket } = data;
  const amount = basket.reduce((total, item) => total + item.amount, 0);
  console.log(amount);
  function handleClick(name, price, id) {
    if (name === "Set-up Service") {
      if (amount % 3 === 0) {
        price = 399 * (amount / 3); 
      } else if (amount % 2 === 0) {
        price = 299 * (amount / 2); 
      }
    } else if (name === "Green Camping") {
      
      price = 249; 
    } else {
      price = 0;
    }
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
        }}
        onClick={() => {
          handleSelected("setup");
          handleClick("Set-up Service", uuidv4());
        }}
      >
        <p>02</p>
        <img src="pics/tent.svg" alt={`artist1`} />
        <h3>Tent Set-up Service</h3>
        <p>
          The crew will set up tents for you. The tents are included in the
          price.
        </p>
        <div className={styles.flex}>
          <div>
            <h4 className={styles.Price}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>{" "}
            </h4>
            <p>DKK 299,-</p>
          </div>
          <div className={styles.rightAlign}>
            <h4 className={styles.Price}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </h4>
            <p>DKK 399,-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectOptional;
