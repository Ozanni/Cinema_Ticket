import React from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function LayoutTicket() {
  const location = useLocation();
  const path = location.pathname.split("/");
  const step = path[path.length - 1].slice(4);

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
  background-color: ${(props) =>
    props.complete === "true" ? "green" : "none"};
  color: #ffffff;
`;
