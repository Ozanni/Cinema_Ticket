import { Movie } from "./Movie";
import { MenuHeader } from "../Header/MenuHeader";
import { AreaSelect } from "../AreaSelect";
import { Header } from "../Header/Header";
import styled from "styled-components";
import { useGetAllMovieQuery } from "../../api/movie";

export const Home = () => {
  const { data: movies } = useGetAllMovieQuery();

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
              return <Movie key={movie.movie_id} movie={movie} />;
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
