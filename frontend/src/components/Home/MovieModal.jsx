import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Others/Button";
import styled from "styled-components";
import { Typography } from "../Others/Typography";

const MovieModal = ({ movie, id }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      //   style={{width: '80%'}}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div
          className="modal-content"
          style={{
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            // width: "80vw",
          }}
        >
          <StyledBody className="modal-body">
            <div>
              <img
                src={movie.image}
                style={{ width: "100%", borderRadius: "12px" }}
              />
              <div>
                <Button text={"Mua vé ngay"} isTicket />
              </div>
            </div>
            <div>
              <h3 style={{ color: "#72BE43" }}> {movie.movie_name} </h3>
              <p style={{ margin: "25px 0" }}> {movie.description} </p>
              <Typography
                text={"Phân loại"}
                value={movie.classification}
                marginBottom={"20px"}
              />
              <Typography
                text={"Đạo diễn"}
                value={movie.director}
                marginBottom={"20px"}
              />
              <Typography
                text={"Thể loại"}
                value={movie.category}
                marginBottom={"20px"}
              />
              <Typography
                text={"Khởi chiếu"}
                value={movie.premiere}
                marginBottom={"20px"}
              />
              <Typography
                text={"Thời lượng"}
                value={`${movie.duration} phút`}
              />
            </div>
          </StyledBody>
        </div>
      </div>
    </div>
  );
};

MovieModal.propTypes = {
  id: PropTypes.string.isRequired,
};

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 30% 68%;
  grid-column-gap: 4%;
  margin: 20px;
`;

export default MovieModal;
