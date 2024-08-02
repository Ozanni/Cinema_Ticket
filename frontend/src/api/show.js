import axios from "axios";
import { useEffect, useState } from "react";

export const useGetShows = (movieID, date) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const getShows = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/show/getByDay`,
          {
            params: {
              movieID: movieID,
              day: formatDate(date),
            },
          }
        );
        setShows(response.data);
      } catch (err) {
        console.log("lỗi api", err);
      }
    };
    getShows();
  }, [movieID, date]);

  return { shows };
};

// xử lý định dạng date từ mặc định thành YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
