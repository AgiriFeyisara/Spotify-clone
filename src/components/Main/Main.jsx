import "./Main.css";
import { Component } from "react";
import CustomButton from "../Button";

export const Main = () => {
  return (
    <main className="main">
      <h1>Get Premium free for 1 month</h1>
      <p>
        Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.
      </p>
      <div className="button-container">
        <CustomButton variant="black" text="GET STARTED" />
        <CustomButton variant="bordered" text="SEE OTHER PLANS" />
      </div>
      <p>
        <a href="#">Terms and conditions apply.</a> 1 month free not available
        for users who have already tried Premium.
      </p>
    </main>
  );
};
