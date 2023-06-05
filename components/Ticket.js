import { useContext } from "react";
import { DispatchContext } from "@/contexts/storeContext";
import styles from "@/styles/Basket.module.css";

function Ticket(props) {
  const dispatch = useContext(DispatchContext);
  function addToBasket() {
    dispatch({
      action: "ADD_PRODUCT",
      payload: {
        id: props.id,
        price: props.price,
        name: props.name,
      },
    });
  }

  return (
    <article className={styles.ticketPage}>
      <p>{props.id}</p>
      <h3>{props.name}</h3>
      <h4>
        <strong>DKK {props.price},- </strong>{" "}
      </h4>

      <button onClick={addToBasket}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-bag-dash"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
          />
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        Add to cart
      </button>
    </article>
  );
}

export default Ticket;
