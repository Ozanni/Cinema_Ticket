import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "../Others/Typography";
import styled from "styled-components";
import { MyDatePicker } from "../Others/DatePicker";
import { useGetMovieQuery } from "../../api/movie";
import { useGetShowByDayQuery } from "../../api/show";
import { useGroupShowsByTheater } from "../../hooks/useGroupShowsByTheater";
import { useGetTheaters } from "../../api/theater";
import { useDispatch } from "react-redux";
import { updateShowID } from "../../rtk/showSlice";
import { Button } from "../Others/Button";

export const Step1 = () => {
  const param = useParams();
  const movieId = param.movieId;
  const navigate = useNavigate();
  const { data: movie } = useGetMovieQuery(movieId);
  const [date, setDate] = useState(new Date());
  const { data: shows } = useGetShowByDayQuery(movieId, date);
  const { theaters } = useGetTheaters();

  const list = useGroupShowsByTheater(shows, theaters);

  const dispatch = useDispatch();
  const handleClickTime = (showID) => {
    return () => {
      dispatch(updateShowID(showID));
      navigate(`/ticket/${movieId}/step2`);
    };
  };

  return (
    <>
      <StyledContainer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2 style={{ margin: "30px 0" }}>
            Bước 1: Chọn thời gian và địa điểm
          </h2>
        </div>
        {movie && (
          <StyledBorder>
            <StyledGrid template={"15% auto"}>
              <div>
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
            </StyledGrid>
          </StyledBorder>
        )}
        <StyledGrid template={"290px auto"}>
          <StyledBorder>
            <MyDatePicker date={date} onChange={(date) => setDate(date)} />
          </StyledBorder>
          <StyledBorder>
            {list && list.length !== 0 ? (
              list?.map((show) => (
                <StyledBorder
                  key={show.theaters_id}
                  style={{ marginBottom: "10px" }}
                >
                  <h6 style={{ color: "white" }}>
                    {" "}
                    {show.theater.theater_name}{" "}
                  </h6>
                  <h6 style={{ color: "white" }}> {show.theater.location} </h6>
                  {show.listShowID.map((item) => (
                    <Button
                      key={item.showID}
                      text={item.time.slice(0, 5)}
                      bg={"#454d6a"}
                      padding={"10px 20px"}
                      onClick={handleClickTime(item.showID)}
                    />
                  ))}
                </StyledBorder>
              ))
            ) : (
              <div>Không có suất chiếu nào</div>
            )}
          </StyledBorder>
        </StyledGrid>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  background-color: #1a1d29;
  color: #ffffff;
  display: grid;
  padding: 10px 20px;
  justify-self: center;
  gap: 30px;
`;

export const StyledBorder = styled.div`
  border: 1px solid #454d6a;
  border-radius: 15px;
  padding: 20px;
`;

const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.template ?? "30% 68%"};
  gap: 2%;
`;
