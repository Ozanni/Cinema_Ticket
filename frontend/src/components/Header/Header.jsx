import styled from "styled-components";
import logo from "../../assets/logoBHD.png";
import { useEffect, useState } from "react";

export const Header = ({ left, right }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader $scrolled={isScrolled ? "true" : "false"}>
      <StyledNav className="px-4 py-2">
        <div>
          <img
            src={logo}
            alt="lỗi"
            style={{
              width: isScrolled ? "40px" : "60px",
              height: isScrolled ? "40px" : "60px",
            }}
          />
        </div>
        <div>{left}</div>
        <div>{right}</div>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${(props) =>
    props.$scrolled === "true" ? "black" : "#1a1d29"};
  width: 100%;
  // padding: 10px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
