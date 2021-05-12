import React from "react";
import Teams from "./Teams";
import Points from "./Points";

export default function Hello(props) {
  console.log(props);
  return (
    <div>
      <h1>Welcome to {props.name} Competition </h1>
      <p>
        {props.message} for {props.minutes} minutes
      </p>
      <div>
        <Teams></Teams>
        <Points></Points>
      </div>
    </div>
  );
}
