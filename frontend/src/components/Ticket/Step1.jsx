import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { MyDatePicker } from "../Others/DatePicker";
import { useGetMovieQuery } from "../../api/movie";
import { useGetShowByDayQuery } from "../../api/show";
import { useGroupShowsByTheater } from "../../hooks/useGroupShowsByTheater";
import { useGetTheatersQuery } from "../../api/theater";
import { Button } from "../Others/Button";
import { StyledBorder, StyledGrid } from "./LayoutTicket";

// xử lý định dạng date từ mặc định thành YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const Step1 = () => {
  const param = useParams();
  const movieId = param.movieId;
  const navigate = useNavigate();
  const [date, setDate] = useState(formatDate(new Date()));
  const { data: shows } = useGetShowByDayQuery({
    movieID: movieId,
    date: date,
  });
  const { data: theaters } = useGetTheatersQuery();

  const list = useGroupShowsByTheater(shows, theaters);

  const handleClickTime = (showID) => {
    return () => {
      navigate(`/ticket/${movieId}/step2/${showID}`);
    };
  };

  return (
    <StyledContainer>
      <StyledGrid template={"290px auto"}>
        <StyledBorder>
          <MyDatePicker
            date={date}
            onChange={(date) => setDate(formatDate(date))}
          />
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
  );
};

const StyledContainer = styled.div`
  // background-color: #1a1d29;
  // color: #ffffff;
  display: grid;
  margin: 30px 3%;
  justify-self: center;
  gap: 30px;
`;
