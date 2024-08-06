import { api } from "../rtk/api";

const theaterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getTheaters: build.query({
      query: () => ({
        url: "/theater/getAll",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTheatersQuery } = theaterApi;
