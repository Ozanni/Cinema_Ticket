import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../rtk/api";

export const useGetSeats = (showID) => {
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    const getSeats = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/seats/${showID}`
        );
        setSeats(response.data);
      } catch (err) {
        console.log("lỗi api", err);
      }
    };
    getSeats();
  }, [showID]);
  return { seats };
};

const seatApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSeats: build.query({
      query: (showID) => ({
        url: `/seats/${showID}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSeatsQuery } = seatApi;
