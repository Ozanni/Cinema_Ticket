import React from "react";
import styled from "styled-components";

export const DropdownSelect = ({ text, children, isIcon }) => {
  return (
    <StyledDropdown>
      <button
        className={`btn btn-outline-light ${isIcon ? "dropdown-toggle" : ""}`}
        type="button"
      >
        {text}
      </button>
      <StyledDropdownContent className="dropdown-content">
        {children}
      </StyledDropdownContent>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
  .btn-outline-light {
    border: 1px solid #777777;
    border-radius: 6px;
  }
  &:hover .dropdown-content {
    display: block;
  }
  .btn-outline-light:hover {
    background-color: #72be43;
    color: white;
  }
`;

const StyledDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: inherit;
  min-width: 160px;
  border: 1px solid #777777;
  border-radius: 6px;
  z-index: 1;
`;
