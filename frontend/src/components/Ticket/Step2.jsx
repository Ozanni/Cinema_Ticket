import { useSelector } from "react-redux";
import { Seat } from "../Others/Seat";
import styled from "styled-components";
import { useGetSeatsQuery } from "../../api/seat";
import { StyledBorder } from "./Step1";

export const Step2 = () => {
  const showID = useSelector((state) => state.show.value);
  const { data: seats } = useGetSeatsQuery(showID);
  const seatOrder = useSelector((state) => state.seat.value);

  return (
    <StyledContainer>
      <StyledSeats>
        {seats && seats.map((seat) => <Seat key={seat.seat_id} seat={seat} />)}
      </StyledSeats>
      <StyledBorder style={{ margin: "8%" }}></StyledBorder>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const StyledSeats = styled.div`
  padding: 10%;
  display: grid;
  grid-template-columns: repeat(15, 1fr);
`;
