import styled from "styled-components";
import eyehide from "../../assets/eye-password-hide.svg";
import eyeshow from "../../assets/eye-password-show.svg";
import { useState } from "react";

export const Input = ({
  label,
  placeholder,
  isHide,
  isRequired,
  ...inputProps
}) => {
  const [isShowPassword, setIsShowPassword] = useState(isHide ? false : true);

  const toggle = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <StyledContainer>
      <label>
        {label} {isRequired && <span>*</span>}
      </label>
      <InputWrapper>
        <StyledInput
          type={`${isShowPassword ? "text" : "password"}`}
          className={``}
          placeholder={placeholder}
          required={isRequired ? true : false}
          {...inputProps}
        />
        {isHide && (
          <span onClick={toggle} className="span-input">
            {" "}
            <img
              src={isShowPassword ? eyeshow : eyehide}
              alt=""
              style={{ width: "20px", height: "20px" }}
            />{" "}
          </span>
        )}
      </InputWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  //   position: relative;
  .span-input {
    float: right;
    margin: -42px 5px -20px 0;
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #777777;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 0;
`;
