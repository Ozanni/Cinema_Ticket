import styled from "styled-components";
import { Button } from "../Others/Button";
import useModal from "../../hooks/useModal";
import MovieModal from "./MovieModal";
import { useNavigate } from "react-router-dom";

export const Movie = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <>
      <StyledContainer
        // onClick={open}
        data-bs-toggle="modal"
        data-bs-target={`#${movie.movie_id}`}
      >
        <img
          src={movie.image}
          style={{ width: "100%", borderRadius: "12px" }}
        />

        <StyledClassification text={movie.classification}>
          {movie.classification}
        </StyledClassification>
        <StyledContent>
          <StyledMovieName>{movie.movie_name}</StyledMovieName>
          <StyledCategory>Thể loại phim: {movie.category}</StyledCategory>
        </StyledContent>

        <MovieModal id={movie.movie_id} movie={movie} />
      </StyledContainer>
      <div>
        <Button
          text={"Mua vé ngay"}
          isTicket
          onClick={() => navigate(`/ticket/${movie.movie_id}/step1`)}
        />
      </div>
    </>
  );
};

const StyledContainer = styled.div`
  width: 18%;
  height: 90%;
  margin: 0 15px;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
`;

const StyledClassification = styled.div`
  background-color: ${(props) => (props.text === "P" ? "#29C0CF" : "#E41010")};
  width: 30px;
  padding: 0 10px;
  border-radius: 5px;
`;

const StyledContent = styled.div`
  // white-space: nowrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
  width: 100%;
`;

const StyledMovieName = styled.h5`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const StyledCategory = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%; /* Ensure the category has a constrained width */
`;
