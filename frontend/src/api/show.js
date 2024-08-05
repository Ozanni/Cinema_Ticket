import { api } from "../rtk/api";

// xử lý định dạng date từ mặc định thành YYYY-MM-DD
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const showApi = api.injectEndpoints({
  endpoints: (build) => ({
    getShowByDay: build.query({
      query: (movieID, date) => ({
        url: "/show/getByDay",
        method: "GET",
        params: {
          movieID: movieID,
          day: formatDate(date),
        },
      }),
    }),
  }),
});

export const { useGetShowByDayQuery } = showApi;
