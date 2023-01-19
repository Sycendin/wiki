import { createContext, Fragment, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../components/Utils/firebase/firebase";
// Actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
// Actual compoenent
export const UserProvider = ({ children }) => {
  // State to keep track of user
  const [currentUser, setCurrentUser] = useState(null);
  // Default values
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    // Listen for changes in our auth for our user
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
      // Create user if needed and set user in our reactContext
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    // Remove listener to stop memory leaks
    return unsubscribe;
  }, []);
  // Return userContext provider
  return (
    <Fragment>
      <UserContext.Provider value={value}>{children}</UserContext.Provider>
    </Fragment>
  );
};
