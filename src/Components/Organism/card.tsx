import React from "react";
import TypographyCard from "../Molecules/TypographyCard/TypographyCard";
import TransportationCard from "../Molecules/TransportationCard/TransportationCard";
import Myntra from "../Atoms/Myntra/Myntra";
import styled from "@emotion/styled";
import { Card } from "@mui/material";

interface Props {}
const MainCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px 19px",
  gap: "10px",
  width: "571px",
  height: "159px",
  position: "absolute",
  left: "20px",
  top: "20px",
  background: "#ffffff",
  borderRadius: "12px",
});

const Sub = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  padding: "0px",
  gap: "16px",
  width: "573px",
  height: "127px",
});

const Sub2 = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0px",
  gap: "33px",
  width: "462px",
  height: "127px",
});

export const UICard: React.FC<Props> = () => {
  return (
    <>
      <MainCard>
        <Sub>
          <Myntra></Myntra>
          <Sub2>
            <TypographyCard></TypographyCard>
            <TransportationCard></TransportationCard>
          </Sub2>
        </Sub>
      </MainCard>
    </>
  );
};
