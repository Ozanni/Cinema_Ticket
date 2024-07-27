import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../Header/Header";
import { Typography } from "../Others/Typography";
import styled from "styled-components";
import { MyDatePicker } from "../Others/DatePicker";

export const Step1 = () => {
  const param = useParams();
  const movieId = param.movieId;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getMovie/${movieId}`
        );
        setMovie(response.data);
      } catch (err) {
        console.log("lỗi lấy phim", err);
      }
    };
    getMovie();
  }, []);

  return (
    <>
      <Header />
      {/* <MyDatePicker style={{ color: "#ffffff" }} /> */}

      <StyledContainer>
        <h2 style={{ margin: "30px 0" }}>Bước 1: Chọn thời gian và địa điểm</h2>
        {movie && (
          <StyledBorder style={{ display: "flex" }}>
            <div style={{ width: "30%", marginRight: "20px" }}>
              <img
                src={movie.image}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div>
              <h3 style={{ color: "#72BE43" }}> {movie.movie_name} </h3>
              <p style={{ margin: "15px 0" }}> {movie.description} </p>
              <Typography text={"Đạo diễn"} value={movie.director} />
              <Typography text={"Thể loại"} value={movie.category} />
              <Typography text={"Khởi chiếu"} value={movie.premiere} />
              <Typography
                text={"Thời lượng"}
                value={`${movie.duration} phút`}
              />
            </div>
          </StyledBorder>
        )}
        <div style={{ display: "flex" }}>
          <StyledBorder>
            <MyDatePicker />
          </StyledBorder>
          <StyledBorder></StyledBorder>
        </div>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  background-color: #1a1d29;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
`;

const StyledBorder = styled.div`
  border: 1px solid #454d6a;
  border-radius: 15px;
  padding: 20px;
`;
