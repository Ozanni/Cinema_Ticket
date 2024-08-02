import axios from "axios";
import { useEffect, useState } from "react";

export const useGetMovie = (movieID) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/getMovie/${movieID}`
        );
        setMovieData(response.data);
      } catch (err) {
        console.log("lỗi api", err);
      }
    };
    getMovie();
  }, [movieID]);

  return { movieData };
};
