import { useState } from "react";
import seatRed from "../../assets/seat-red.svg";
import seatWhite from "../../assets/seat-white.svg";
import seatGreen from "../../assets/seat-green.svg";
import { useDispatch } from "react-redux";
import { add } from "../../rtk/seatSlice";

export const Seat = ({ seat }) => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  // Tính toán màu sắc của ghế dựa trên status và trạng thái change
  const color = seat.status === 1 ? seatRed : change ? seatGreen : seatWhite;

  const handleClick = () => {
    if (seat.status !== 1) {
      setChange(!change);
      dispatch(add(seat));
    }
  };

  return (
    <img
      src={color}
      alt="seat"
      style={{
        width: "100%",
        cursor: seat.status === 1 ? "not-allowed" : "pointer",
      }}
      onClick={handleClick}
    />
  );
};
