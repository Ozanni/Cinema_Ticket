import React from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import { useGetMovieQuery } from "../../api/movie";

export default function LayoutTicket() {
  const location = useLocation();
  const path = location.pathname.split("/");
  const step = path[path.length - 1].slice(4);
  const { data: movie } = useGetMovieQuery(1);
  console.log("data", movie);

  return (
    <div style={{ backgroundColor: "#1a1d29" }}>
      <Header left={<StepHeader currentStep={step} />} />
      <Outlet />
    </div>
  );
}

const StepHeader = ({ currentStep }) => {
  return (
    <StepContainer>
      {[1, 2, 3, 4].map((step) => (
        <Step key={step} complete={(step <= currentStep).toString()}>
          {step}
        </Step>
      ))}
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.complete === "true" ? "green" : "none"};
  color: #ffffff;
  border: #ffffffcc 3px solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
