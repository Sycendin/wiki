import { createContext, Fragment, useState } from "react";
// Actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
// Actual compoenent
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return (
    <Fragment>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </Fragment>
  );
};
