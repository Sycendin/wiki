import { createContext, useState } from "react";

import { charData } from "../chardata";

export const CharContext = createContext({
  chars: [],
});

export const CharProvider = ({ children }) => {
  const [charsInfo, setCharsInfo] = useState(charData);
  const value = { charsInfo, setCharsInfo };
  return <CharContext.Provider value={value}>{children}</CharContext.Provider>;
};
