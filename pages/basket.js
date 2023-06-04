import React from "react";
import { useContext, useEffect, useState } from "react";
import { StoreContext, DispatchContext } from "@/contexts/storeContext";
import Cartitem from "@/components/Cartitem";
import Link from "next/link";
import styles from "@/styles/Basket.module.css";

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
          Clear Basket
        </button>{" "}
        <Link className={styles.checkout} href="/checkout">
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Basket;
