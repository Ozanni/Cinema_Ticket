import styled from "styled-components";
import { Input } from "../Others/Input";
import { useState } from "react";
import axios from "axios";
import { Button } from "../Others/Button";

export const Register = ({ onSuccess }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage(1);
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        first_name: firstName,
        last_name: lastName,
        gender,
        email,
        password,
        "phone-number": phoneNumber,
      });
      onSuccess();
      console.log(response);
    } catch (err) {
      console.error(err);
      setErrorMessage(0);
    }
  };

  return (
    <StyledRegister>
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <StyledGrid>
          <Input
            label="Họ"
            onChange={(e) => setLastName(e.target.value)}
            isRequired
          />
          <Input
            label="Tên đệm và tên"
            onChange={(e) => setFirstName(e.target.value)}
            isRequired
          />
        </StyledGrid>

        <StyledGrid>
          <div style={{ paddingTop: "20px" }}>
            <label>Giới tính</label>
            <StyledFlex>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Nam
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  // checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Nữ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  // checked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Khác
                </label>
              </div>
            </StyledFlex>
          </div>
          <Input
            label="Địa chỉ email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            isRequired
          />
        </StyledGrid>
        <StyledGrid>
          <Input
            label="Mật khẩu"
            isHide
            isRequired
            onChange={(e) => setPassword(e.target.value)}
          />
          <>
            <Input
              label="Nhập lại mật khẩu"
              isHide
              isRequired
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage === 1 && (
              <p className="text-danger">Mật khẩu không trùng khớp</p>
            )}
          </>
        </StyledGrid>
        <Input
          label="Số điện thoại"
          isRequired
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errorMessage === 0 && (
          <p className="text-danger">Tài khoản email đã đăng ký</p>
        )}
        <Button
          text={"Đăng ký"}
          oneColor
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "20px" }}
        ></Button>
      </form>
    </StyledRegister>
  );
};

const StyledRegister = styled.div`
  width: 60%;
  background-color: #1a1d29;
  color: #ffffff;
  padding: 20px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  grid-column-gap: 4%;
`;

const StyledFlex = styled.div`
  display: flex;
  .form-check {
    margin: 10px;
  }
`;
