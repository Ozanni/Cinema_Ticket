import { api } from "../rtk/api";

const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query({
      query: (id) => ({
        url: `/getMovie/${id}`,
        method: "GET",
      }),
    }),
    getAllMovie: build.query({
      query: () => ({
        url: "/getMovie",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMovieQuery, useGetAllMovieQuery } = movieApi;
