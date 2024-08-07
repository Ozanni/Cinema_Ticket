import { useSelector } from "react-redux";
import { Seat } from "../Others/Seat";
import { styled } from "styled-components";
import { useGetSeatsQuery } from "../../api/seat";
import { StyledBorder } from "./LayoutTicket";
import { useNavigate, useParams } from "react-router-dom";
import { useGetShowByIDQuery } from "../../api/show";
import { Button } from "../Others/Button";

export const Step2 = () => {
  const navigate = useNavigate();
  const param = useParams();
  const movieID = param.movieId;
  const showID = param.showID;
  const { data: seats } = useGetSeatsQuery(showID);
  const { data: shows } = useGetShowByIDQuery(showID);
  const choiceSeats = useSelector((state) => state.seat);

  return (
    <StyledContainer>
      <div>
        <div style={{ margin: "50px 15% 0" }}>
          <div style={{ display: "flex", gap: "20%" }}>
            <DescribeSeat status={0} content={"Ghế trống"} />
            <DescribeSeat status={2} content={"Ghế đã đặt"} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "20%",
              paddingLeft: "10%",
              paddingTop: "20px",
            }}
          >
            <DescribeSeat status={3} content={"Ghế đang chọn"} />
            <DescribeSeat status={1} content={"Ghế chờ thanh toán"} />
          </div>
        </div>
        <StyledSeats count={15}>
          {seats &&
            seats.map((seat) => <Seat key={seat.seat_id} seat={seat} />)}
        </StyledSeats>
      </div>
      <StyledBorder style={{ margin: "8%", padding: 0, color: "#ffffff" }}>
        <StyledDiv>
          <h5>BHD Star The Garden</h5>
          <span>06/08/2024 - Suất chiếu: 12:00</span>
        </StyledDiv>
        <StyledDiv>
          <h5 style={{ color: "#72be43" }}>KẺ TRỘM MẶT TRĂNG 4</h5>
          {choiceSeats.name.map((seatName, index) => (
            <div key={index}>
              {index > 0 && <span>, </span>}
              <span>{seatName}</span>
            </div>
          ))}
        </StyledDiv>
        <div
          style={{
            padding: "20px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h5>Tổng tiền</h5>
            <h5> {choiceSeats.totalPrice.toLocaleString("vi-VN")} VNĐ </h5>
          </div>
          {choiceSeats.totalPrice !== 0 && (
            <Button
              text={"Chọn đồ ăn"}
              style={{ width: "100%", margin: "20px 0" }}
              onClick={() => navigate(`/ticket/${movieID}/step3/${showID}`)}
            />
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={`/ticket/${movieID}/step1`}
              style={{ textDecoration: "none" }}
            >
              {"<- Trở lại"}
            </a>
          </div>
        </div>
      </StyledBorder>
    </StyledContainer>
  );
};

const DescribeSeat = ({ status, content }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <Seat seat={{ status: status }} size={"40px"} />
      <div> {content} </div>
    </div>
  );
};

const StyledContainer = styled.div`
  color: #ffffff;
  display: grid;
  grid-template-columns: 60% 40%;
`;

const StyledSeats = styled.div`
  padding: 5% 10%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.count}, 1fr);
`;

const StyledDiv = styled.div`
  border-bottom: 0.5px solid #454d6a;
  padding: 20px;
`;
