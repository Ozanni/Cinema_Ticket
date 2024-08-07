import { useState } from "react";
import seatRed from "../../assets/seat-red.svg";
import seatWhite from "../../assets/seat-white.svg";
import seatGreen from "../../assets/seat-green.svg";
import seatYellow from "../../assets/seat-yellow.svg";
import { useDispatch } from "react-redux";
import { add, remove } from "../../rtk/seatSlice";

export const Seat = ({ seat, size }) => {
  const [change, setChange] = useState(false);
  const dispatch = useDispatch();

  var color;
  switch (seat.status) {
    case 1:
      color = seatYellow;
      break;
    case 2:
      color = seatRed;
      break;
    case 3:
      color = seatGreen;
      break;
    default:
      color = seatWhite;
  }

  if (change) {
    color = seatGreen;
  }

  const handleClick = () => {
    if (seat.status !== 1) {
      setChange(!change);
      change ? dispatch(remove(seat)) : dispatch(add(seat));
    }
  };

  return (
    <img
      src={color}
      alt="seat"
      style={{
        width: `${size ?? "100%"}`,
        cursor: seat.status === 1 ? "not-allowed" : "pointer",
      }}
      onClick={handleClick}
    />
  );
};
