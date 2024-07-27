import { useRoutes } from "react-router-dom";
import { Ticket } from "./Ticket";
import { Home } from "../components/Home/Home";
import { Layout } from "../components/Auth/Layout";

export const AppRoutes = () => {
  const ticketRoute = [
    {
      path: "/ticket/:movieId/*",
      element: <Ticket />,
    },
  ];

  const publicRoutes = [
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/tai-khoan",
      element: <Layout />,
    },
  ];
  const element = useRoutes([...publicRoutes, ...ticketRoute]);
  return <>{element}</>;
};
