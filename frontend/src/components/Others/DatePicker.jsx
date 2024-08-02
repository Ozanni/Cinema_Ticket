import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const MyDatePicker = ({ date, onChange }) => {
  // const [startDate, setStartDate] = useState(date);

  return (
    <DatePicker
      selected={date}
      minDate={new Date()}
      onChange={onChange}
      inline
    />
  );
};
