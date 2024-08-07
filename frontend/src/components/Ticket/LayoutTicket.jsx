import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../api/movie";
import { Typography } from "../Others/Typography";

export default function LayoutTicket() {
  const location = useLocation();
  const path = location.pathname.split("/");
  const step = path[path.length - (path.length === 4 ? 1 : 2)].slice(4);

  const outletRef = useRef(null);
  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    console.log("outlet", outletRef.current);
  }, []);

  return (
    <div style={{ backgroundColor: "#1a1d29", color: "#ffffff" }}>
      <Header left={<StepHeader currentStep={step} />} />
      <StepBody step={step} />
      <div ref={outletRef}>
        <Outlet />
      </div>
    </div>
  );
}

const StepHeader = ({ currentStep }) => {
  return (
    <StepContainer>
      {[1, 2, 3, 4].map((step) => (
        <Step key={step} complete={(step <= currentStep).toString()}>
          {step}
        </Step>
      ))}
    </StepContainer>
  );
};

const StepBody = ({ step }) => {
  const param = useParams();
  const movieID = param.movieId;
  const { data: movie } = useGetMovieQuery(movieID);

  var content;
  switch (step) {
    case "1":
      content = "Bước 1: Chọn thời gian và địa điểm";
      break;
    case "2":
      content = "Bước 2: Chọn ghế";
      break;
    case "3":
      content = "Bước 3: Chọn đồ ăn";
      break;
    case "4":
      content = "Bước 4: Thanh toán";
      break;
  }

  return (
    <div style={{ margin: "0 3%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2 style={{ margin: "30px 0" }}> {content} </h2>
      </div>
      {movie && (
        <StyledBorder>
          <StyledGrid template={"15% auto"}>
            <div>
              <img
                src={movie?.image}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div>
              <h3 style={{ color: "#72BE43" }}> {movie?.movie_name} </h3>
              <p style={{ margin: "15px 0" }}> {movie?.description} </p>
              <Typography text={"Đạo diễn"} value={movie?.director} />
              <Typography text={"Thể loại"} value={movie?.category} />
              <Typography text={"Khởi chiếu"} value={movie?.premiere} />
              <Typography
                text={"Thời lượng"}
                value={`${movie?.duration} phút`}
              />
            </div>
          </StyledGrid>
        </StyledBorder>
      )}
    </div>
  );
};

const StepContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.complete === "true" ? "green" : "none"};
  color: #ffffff;
  border: #ffffffcc 3px solid;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const StyledBorder = styled.div`
  border: 1px solid #454d6a;
  border-radius: 15px;
  padding: 20px;
`;

export const StyledGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => props.template ?? "30% 68%"};
  gap: 2%;
`;
