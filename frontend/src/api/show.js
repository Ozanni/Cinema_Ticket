import { api } from "../rtk/api";

const showApi = api.injectEndpoints({
  endpoints: (build) => ({
    getShowByDay: build.query({
      query: ({ movieID, date }) => {
        return {
          url: "/show/getByDay",
          method: "GET",
          params: {
            movieID: movieID,
            day: date,
          },
        };
      },
    }),
    getShowByID: build.query({
      query: (id) => {
        return {
          url: `/show/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetShowByDayQuery, useGetShowByIDQuery } = showApi;
