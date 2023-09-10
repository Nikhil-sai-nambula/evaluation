/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Custom_Typography } from "../../Atoms/Typography/Typography";
import icon from "../../Atoms/Svgs/Vector3.svg";
import "../../Molecules/helper.css";
import { topBoardData } from "../Data/Data";

export default function TypographyCard() {
  return (
    <div className="Typography_main">
      <div className="Typography">
        {topBoardData.map((entry) => {
          return (
            <Custom_Typography
              sx={entry.sx}
              variant={entry.variant}
              value={entry.content}
            />
          );
        })}
        {/* <Custom_Typography
          sx={{
            width: "263px",
            height: "30px",
            fontStyle: "normal",
            fontFamily: "Monsterrat",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "#373C38",
          }}
          variant={"h3"}
          value={"User Design Experience"}
        /> */}
        {/* <Custom_Typography
          sx={{
            width: "263px",
            height: "30px",
            fontStyle: "normal",
            fontFamily: "Monsterrat",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "#373C38",
          }}
          variant={"h3"}
          value={"User Design Experience"}
        /> */}
        {/* <Custom_Typography
          width={"44px"}
          height={"16px"}
          fontStyle={"normal"}
          fontFamily={"Monsterrat"}
          fontSize={"12px"}
          fontWeight={"500"}
          lineHeight={"16px"}
          color={"#FF725E"}
          value={"Myntra"}
        /> */}
        {/* <Custom_Typography
          width={"194px"}
          height={"16px"}
          fontStyle={"normal"}
          fontFamily={"Monsterrat"}
          fontSize={"12px"}
          fontWeight={"500"}
          lineHeight={"16px"}
          color={"#656E66"}
          value={"Hitech city,Hyderabad - 500072"}
        /> */}
      </div>

      <div className="h_line">
        <img src={icon} alt="dot"></img>
        <img src={icon} alt="dot"></img>
        <img src={icon} alt="dot"></img>
      </div>
    </div>
  );
}
