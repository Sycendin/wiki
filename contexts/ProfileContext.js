import { createContext, useState } from "react";

export const ProfileContext = createContext({
  profileOpen: false,
  setProfileOpen: () => null,
});

export const ProfileProvider = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const value = { profileOpen, setProfileOpen };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
