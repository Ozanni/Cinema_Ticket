import React, { useState } from "react";
import styled from "styled-components";
import { DropdownSelect } from "./Others/DropdownSelect";

export const AreaSelect = ({ area }) => {
  const [areaName, setAreaName] = useState(area);
  const listArea = ["TP.Hồ Chí Minh", "Hà Nội", "TP.Huế", "Đồng Nai"];

  const handleDropdownSelect = (name) => {
    localStorage.setItem("area", name);
    setAreaName(name);
  };

  return (
    <DropdownSelect text={areaName} isIcon>
      {listArea.map((item, index) => (
        <StyledDropdownItem key={index} $isSelected={item === areaName}>
          <button
            className="dropdown-item"
            onClick={() => handleDropdownSelect(item)}
          >
            {item}
          </button>
        </StyledDropdownItem>
      ))}
    </DropdownSelect>
  );
};

const StyledDropdownItem = styled.div`
  background-color: inherit;
  color: #cbc8cd;
  text-decoration: none;
  button {
    padding: 8px 16px;
    width: 100%;
    border-radius: 2px;
    background-color: ${(props) =>
      props.$isSelected ? "#72be43" : "rgba(0, 0, 0, 0.2)"};
    text-align: left;
  }
    &:hover {
      background-color: ${(props) =>
        props.$isSelected ? "#72be43" : "rgba(0, 0, 0, 0.2)"};
      color: ${(props) => (props.$isSelected ? "white" : "#72be43")};
    }
  }
`;
