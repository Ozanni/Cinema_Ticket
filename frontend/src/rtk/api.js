import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const Url = import.meta.env.VITE_URL;

const axiosBaseApi = ({ baseUrl = "" }) => {
  return async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseApi({ baseUrl: Url }),
  endpoints: () => ({}),
});
