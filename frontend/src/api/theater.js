import axios from "axios";
import { useEffect, useState } from "react";

export const useGetTheaters = () => {
  const [theaters, setTheaters] = useState(null);

  useEffect(() => {
    const getTheaters = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/theater/getAll"
        );
        setTheaters(response.data);
      } catch (err) {
        console.log("lỗi api", err);
      }
    };
    getTheaters();
  }, []);

  return { theaters };
};
