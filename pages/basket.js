import React from "react";
import { useContext, useEffect, useState } from "react";
import { StoreContext, DispatchContext } from "@/contexts/storeContext";
import Cartitem from "@/components/Cartitem";
import Link from "next/link";
import styles from "@/styles/Basket.module.css";
import { Button, message, Steps, theme } from "antd";

function Basket() {
  const state = useContext(StoreContext);
  const dispatch = useContext(DispatchContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const { data } = useContext(StoreContext);

  useEffect(() => {
    let amount = 0;
    let price = 0;

    data.basket.forEach((item) => {
      amount += item.amount;
      price += item.price * item.amount;
    });

    setTotalAmount(amount);
    setTotalPrice(price);
  }, [data.basket]);

  return (
    <div className={styles.wrapper}>
      <h1>Basket</h1>
      <ul>
        {state.data.basket.map((item) => {
          return <Cartitem {...item} />;
        })}
      </ul>
      <p className={styles.amount}>
        You currently have <strong>{totalAmount}</strong> tickets in the basket
      </p>
      <p>
        <strong>Total price:</strong> DKK {totalPrice},-
      </p>
      <div className={styles.clearCheckout}>
        <button
          className={styles.delete}
          onClick={() => dispatch({ action: "EMPTY_BASKET" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>{" "}
        <Link className={styles.checkout} href="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Basket;
