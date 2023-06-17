import { React, useState, useContext, useEffect, Link } from "react";
import { Button, message, Steps, theme } from "antd";
import SelectOptional from "@/components/SelectOptional.js";
import styles from "@/styles/Checkout.module.css";
import Camping from "@/components/Camping.js";
import Booking from "@/components/Booking.js";
import PaymentForm from "@/components/PaymentForm.js";
import { v4 as uuidv4 } from "uuid";
import SelectedTickets from "@/components/SelectedTickets.js";
import { StoreContext } from "@/contexts/storeContext";
import BookingInfo from "@/components/BookingInfo.js";

function checkout() {
  /* data */

  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState([]);

  /* sending data */

  function postData() {
    const orderNumber = uuidv4();
    const camping = products.find((item) => item.type === "Camping");
    const optional = products
      .filter((item) => item.type === "Optional")
      .map((option) => option.name);

    info.forEach((personInfo) => {
      const personData = {
        ...personInfo,
        orderNumber: orderNumber,
        campingArea: camping.name,
        optional: optional,
      };

      postInfo(personData);
    });
  }

  /* posting on database */

  function postInfo(info) {
    fetch("https://libzxtdzurkelchwpgbe.supabase.co/rest/v1/Purchases", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpYnp4dGR6dXJrZWxjaHdwZ2JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNDU4NTEsImV4cCI6MTk5OTcyMTg1MX0.Z0KqBmrET-k1eFg9V1SXhdL45nPVLyMP62lYxVs5NJg",
      },
      body: JSON.stringify(info),
    })
      .then((data) => data.json())
      .then();
  }

  /* total ticket amount, price */
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

  /* antd step pages */
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Check if window is defined (browser environment) before adding the event listener
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      // Check if window is defined (browser environment) before removing the event listener
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);
  const steps = [
    {
      title: "Selected Tickets",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: windowWidth < 768 ? "column" : "row",
            justifyContent: "space-around",
            alignItems: windowWidth < 768 ? "center" : "start",
            gap: windowWidth < 768 ? "4rem" : "0rem",
            padding: "3rem",
          }}
        >
          <SelectedTickets
            products={products}
            setProducts={setProducts}
          ></SelectedTickets>
          <Booking
            products={products}
            setProducts={setProducts}
            totalPrice={totalPrice}
          />
        </div>
      ),
    },
    {
      title: "Select Camping",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: windowWidth < 768 ? "column" : "row",
            justifyContent: "space-around",
            alignItems: windowWidth < 768 ? "center" : "start",
            padding: "2rem",
            gap: windowWidth < 768 ? "4rem" : "0rem",
          }}
        >
          <Camping products={products} setProducts={setProducts} />
          <Booking
            products={products}
            setProducts={setProducts}
            totalPrice={totalPrice}
          />
        </div>
      ),
    },
    {
      title: "Select Optional",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: windowWidth < 768 ? "column" : "row",
            justifyContent: "space-around",
            alignItems: windowWidth < 768 ? "center" : "start",
            padding: "2rem",
            gap: windowWidth < 768 ? "4rem" : "0rem",
          }}
        >
          <SelectOptional products={products} setProducts={setProducts} />
          <Booking
            products={products}
            setProducts={setProducts}
            totalPrice={totalPrice}
          />
        </div>
      ),
    },
    {
      title: "Booking Information",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: windowWidth < 768 ? "column" : "row",
            justifyContent: "space-around",
            alignItems: windowWidth < 768 ? "center" : "start",
            padding: "2rem",
            gap: windowWidth < 768 ? "4rem" : "0rem",
          }}
        >
          <BookingInfo info={info} setInfo={setInfo} />
          <Booking
            products={products}
            setProducts={setProducts}
            totalPrice={totalPrice}
          />
        </div>
      ),
    },
    {
      title: "Payment",
      content: (
        <div
          style={{
            lineHeight: "1rem",
            display: "flex",
            flexDirection: windowWidth < 768 ? "column" : "row",
            justifyContent: "space-around",
            alignItems: windowWidth < 768 ? "center" : "start",
            padding: "2rem",
            gap: windowWidth < 768 ? "4rem" : "0rem",
          }}
        >
          <PaymentForm />
          <Booking products={products} setProducts={setProducts} />
        </div>
      ),
    },
  ];

  /* antd settings */

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <div className={styles.CheckoutButtons}>
        {current > 0 && (
          <Button className={styles.previousButton} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button
            className={styles.nextButton}
            type="primary"
            onClick={() => next()}
          >
            Next
          </Button>
        )}

        {current === steps.length - 1 && (
          <Button
            className={styles.payButton}
            href="/thankYou"
            type="primary"
            onClick={() => {
              postData();
              message.success("Booking Complete!");
            }}
          >
            Pay
          </Button>
        )}
      </div>
      <Steps className={styles.Steps} current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
    </>
  );
}

export default checkout;
