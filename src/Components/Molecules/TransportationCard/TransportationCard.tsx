/* eslint-disable react/jsx-pascal-case */
import React from "react";
import svg2 from "../../Atoms/Svgs/Vector.svg";
import svg3 from "../../Atoms/Svgs/Vector1.svg";
import svg4 from "../../Atoms/Svgs/Vector2.svg";
import svg5 from "../../Atoms/Svgs/Vector4.svg";
import "../../Molecules/helper.css";
import { Custom_Typography } from "../../Atoms/Typography/Typography";

export default function TransportationCard() {
  return (
    <div className="main">
      <div className="sub1">
        <img src={svg2} alt="scooter" />
        <img src={svg3} alt="bus"></img>
        <img src={svg5} alt="bus"></img>
        <img src={svg4} alt="bus"></img>
        {/* <Card></Card> */}
      </div>
      <Custom_Typography
        sx={{
          width: "70px",
          height: "16px",
          fontStyle: "normal",
          fontFamily: "Monsterrat",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "30px",
          color: "#373C38",
        }}
        variant={"h3"}
        value={"36 min ago"}
      />
    </div>
  );
}
