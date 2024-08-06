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
  }),
});

export const { useGetShowByDayQuery } = showApi;
