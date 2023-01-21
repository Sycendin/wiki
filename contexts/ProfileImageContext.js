import { createContext, useState } from "react";

export const ProfileImageModalContext = createContext({
  profileImageModal: false,
  setProfileImageModalOpen: () => null,
});

export const ProfileImageModalProvider = ({ children }) => {
  const [profileImageModalOpen, setProfileImageModalOpen] = useState(false);
  const value = { profileImageModalOpen, setProfileImageModalOpen };
  return (
    <ProfileImageModalContext.Provider value={value}>
      {children}
    </ProfileImageModalContext.Provider>
  );
};
