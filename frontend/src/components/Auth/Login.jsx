import styled from "styled-components";
import { Input } from "../Others/Input";
import { Button } from "../Others/Button";
import { useState } from "react";
import axios from "axios";

export const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.access_token);
      onSuccess();
    } catch (err) {
      console.error(err);
      setErrorMessage(true);
    }
  };

  return (
    <StyledLogin>
      <h2>Đăng nhập tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label={"Email"}
          type="email"
          placeholder={"Tài khoản hoặc địa chỉ email"}
          isRequired
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label={"Mật khẩu"}
          placeholder={"Mật khẩu"}
          isHide
          isRequired
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && (
          <p className="text-danger">
            Tên tài khoản/email hoặc mật khẩu không chính xác
          </p>
        )}
        <Button
          text={"Đăng nhập"}
          oneColor
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "20px" }}
        ></Button>
      </form>
    </StyledLogin>
  );
};

const StyledLogin = styled.div`
  width: 40%;
  background-color: #1a1d29;
  color: #ffffff;
  padding: 20px;
`;
