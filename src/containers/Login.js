import React, { useState } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { Auth } from "aws-amplify";

import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
      props.history.push("/");
    } catch (e) {
      alert(e.message);
      setIsLoading(false);
    }
  }

  return (
    <div className={"Login"}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId={"email"} bsSize={"large"}>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type={"email"}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId={"password"} bsSize={"large"}>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type={"password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <LoaderButton
          block
          type={"submit"}
          bsSize={"large"}
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </form>
    </div>
  );
}