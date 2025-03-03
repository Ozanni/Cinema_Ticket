import React from "react";
import ticket from "../../assets/ticket.svg";
import styled from "styled-components";

export const Button = ({
  text,
  isTicket,
  oneColor,
  bg,
  padding,
  ...buttonProps
}) => {
  return (
    <StyledButton
      oneColor={oneColor}
      bg={bg}
      padding={padding}
      {...buttonProps}
    >
      {isTicket && (
        <img
          src={ticket}
          // className="pb-1 px-2"
          alt="Ticket"
          style={{ height: "25px", padding: "0 6px 4px 0" }}
        />
      )}
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.oneColor
      ? "#72be43"
      : props.bg ?? "linear-gradient(to bottom, #72be43, #dde455)"};
  color: white;
  padding: ${(props) => props.padding ?? "5px 10px"};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${(props) => (props.bg ? "#72be43" : "none")};
  }
`;
