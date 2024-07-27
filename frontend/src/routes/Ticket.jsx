import { useRoutes } from "react-router-dom";
import { Step1 } from "../components/Ticket/Step1";

export const Ticket = () => {
  const element = useRoutes(stepRoute);
  return <>{element}</>;
};

const stepRoute = [
  {
    path: "step1",
    element: <Step1 />,
  },
  {
    path: "step2",
    element: <>Step2</>,
  },
  {
    path: "step3",
    element: <>Step3</>,
  },
  {
    path: "step4",
    element: <>Step4</>,
  },
];
