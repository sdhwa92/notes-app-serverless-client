import React, { useState } from "react";
import {API} from "aws-amplify";
import {Elements, StripeProvider} from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import "./Payment.css";


export default function Payment(props) {

  const [isLoading, setIsLoading] = useState(false);

  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details
    });
  }

  async function handleFormSubmit(storage, {token, error}) {
    if (error) {
      alert(error.message);
      return;
    }

    setIsLoading(true);

    try {
      await billUser({
        storage,
        source: token.id
      });

      alert("Your card has been charged successfully!");
      props.history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="Payment">
      <StripeProvider apiKey={config.STRIPE_KEY}>
        <Elements>
          <BillingForm
            isLoading={isLoading}
            onSubmit={handleFormSubmit}
          />
        </Elements>
      </StripeProvider>
    </div>
  );
}
