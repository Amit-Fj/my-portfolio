import React from "react";

// array destructuring
const [, fruits, nuts] = ["chips", "kiwi fruit", "macadamia "];

function NewZealandFans({ name }) {
  return (
    <div>
      <h3>Cheer for {name} Team!</h3>
      <h3>Eat {fruits}</h3>
    </div>
  );
}

function AustralianFans({ name }) {
  return (
    <div>
      <h3>Cheer for {name} Team!</h3>
      <h3>Eat {nuts}</h3>
    </div>
  );
}

function Cheer(props) {
  if (props.country === "NZ") {
    return <NewZealandFans name="New Zealand"></NewZealandFans>;
  } else if (props.country === "AUS") {
    return <AustralianFans name="Australian"></AustralianFans>;
  }
}

const teamList = [
  "Wellington Phoenix",
  "Sydney FC",
  "Brisbane Roars",
  "Newcastle Jets",
];

function Team({ names }) {
  return (
    <ul>
      {names.map((team) => (
        //  a key is an identifier for a dynamically created element.
        <li key={team.toString()}>{team}</li>
      ))}
    </ul>
  );
}

export default function Teams() {
  return (
    <React.Fragment>
      <Team names={teamList} />
      <Cheer country="NZ"></Cheer>
    </React.Fragment>
  );
}
