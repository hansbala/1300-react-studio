import React from "react";
import MyCard from "./MyCard.jsx";

export default class MyList extends React.Component {
  render() {
    const penguins = [
      { name: "Gentoo Penguin" },
      { name: "Emperor Penguin" },
      { name: "Macaroni Penguin" },
      { name: "Little Penguin" },
      { name: "Adelie Penguin" },
      { name: "Humboldt Penguin" },
      { name: "Chinstrap Penguin" },
      { name: "Royal Penguin" },
    ];
    return penguins.map((penguin) => (
      <div>
        <MyCard name={penguin.name}></MyCard>
      </div>
    ));
  }
}
