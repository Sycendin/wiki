import { createContext, useState } from "react";

export const VisitContext = createContext({
  visit: false,
  setVisit: () => null,
});

export const VisitProvider = ({ children }) => {
  const [visit, setVisit] = useState("True");

  const changeVisit = (value) => {
    setVisit(value);
  };
  const value = { visit, changeVisit };
  return (
    <VisitContext.Provider value={value}>{children}</VisitContext.Provider>
  );
};
