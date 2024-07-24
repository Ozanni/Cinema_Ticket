import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import axios from "axios";
import { MenuHeader } from "../Header/MenuHeader";
import { AreaSelect } from "../AreaSelect";
import { Header } from "../Header/Header";
import styled from "styled-components";

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/getMovie");
        setMovies(response.data);
      } catch (err) {
        console.log("lỗi lấy danh sách phim", err);
      }
    };
    getMovies();
  }, []);

  return (
    <StyledHome>
      <Header
        left={<MenuHeader />}
        right={<AreaSelect area={"Hà Nội"} isIcon />}
      />
      <div>
        <div>Phim đang chiếu</div>
        <div style={{ display: "flex" }}>
          {movies &&
            movies.map((movie) => {
              return <Movie movie={movie} />;
            })}
        </div>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  background-color: #1a1d29;
  color: #ffffff;
  padding: 20px;
`;
