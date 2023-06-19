import styles from "@/styles/Booking.module.css";
import React from "react";
import { useState, useEffect } from "react";
import BookingItem from "@/components/BookingItem";
import { v4 as uuidv4 } from "uuid";

export default function Booking(props) {
  /*  const items = [
    { type: "VIP Ticket", price: 799, amount: 2, id: 1 },
    { type: "Regular Ticket", price: 599, amount: 1, id: 2 },
    { type: "Nilfheim Camping", id: 3 },
    { type: "Green Camping", price: 249, id: 4 },
  ]; */

  const [total, setTotal] = useState(99 + props.totalPrice); 

  const items = [
    ...props.products,
    { name: "Booking Fee", type: "Fee", price: 99, id: uuidv4() },
  ];

  useEffect(() => {
    setTotal(99 + props.totalPrice);
    props.products.forEach((product) => {
      if (product.price) {
        setTotal((old) => (old += product.price));
      }
    });
  }, [props.products]);

  return (
    <div className={styles.Booking}>
      <h1>Your basket</h1>
      {items.map((item) => {
        return (
          <BookingItem
            key={item.id}
            name={item.name}
            price={item.price}
            item={item}
          />
        );
      })}

      <p>
        <span>Total</span>
        <span>
          <strong>DKK {total},-</strong>
        </span>
      </p>
    </div>
  );
}
