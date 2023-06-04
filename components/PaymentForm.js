import React, { useState } from "react";
import styles from "@/styles/PaymentForm.module.css";
import { usePaymentInputs } from "react-payment-inputs";

export default function PaymentInputs() {
  const { getCardNumberProps, getExpiryDateProps, getCVCProps } =
    usePaymentInputs();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCVC] = useState("");

  const handleChangeCardNumber = (event) => {
    setCardNumber(event.target.value);
  };

  const handleChangeExpiryDate = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleChangeCVC = (event) => {
    setCVC(event.target.value);
  };

  return (
    <>
      <div className={styles.paymentFormFlex}>
        <div>
          <label>
            Card holder name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Card number
            <input
              {...getCardNumberProps({ onChange: handleChangeCardNumber })}
              value={cardNumber}
            />
          </label>
        </div>
        <div>
          <label>
            Expiry date
            <input
              {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
              value={expiryDate}
            />
          </label>
          <label>
            CVC
            <input
              {...getCVCProps({ onChange: handleChangeCVC })}
              value={cvc}
            />
          </label>
        </div>
      </div>
    </>
  );
}
