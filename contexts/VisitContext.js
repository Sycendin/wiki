import { createContext, useState } from "react";

export const VisitContext = createContext({
  visit: false,
  setVisit: () => null,
  timeCheck: false,
  setTimeCheck: () => null,
});

export const VisitProvider = ({ children }) => {
  const [visit, setVisit] = useState("True");
  const [timeCheck, setTimeCheck] = useState(false);
  const changeVisit = (value) => {
    setVisit(value);
  };
  const changeTimeCheck = (value) => {
    setTimeCheck(value);
  };
  const value = { visit, changeVisit, timeCheck, changeTimeCheck };
  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
};
