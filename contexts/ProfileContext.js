import { createContext, useState } from "react";

const addPicture = (picks, pickToAdd) => {
  let existingPick = false;
  if (picks.length > 0) {
    existingPick = picks.find((pickItem) => pickItem.name === pickToAdd.name);
  }
  if (existingPick) {
    return picks.map((pickItem) =>
      pickItem.name === pickToAdd.name
        ? { ...pickItem, ammo: pickItem.ammo + 1 }
        : pickItem
    );
  }

  return [...picks, { ...pickToAdd }];
  // return [...pick, { ...pickToAdd, quantity: 1 }];
};
export const ProfileContext = createContext({
  profileOpen: false,
  setProfileOpen: () => null,
  pickPic: [],
  addPick: () => {},
});

export const ProfileProvider = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [pickPic, setPick] = useState([]);
  const addToPick = (pickToAdd) => {
    setPick(addPicture(pickPic, pickToAdd));
    console.log(pickPic);
  };
  const value = { profileOpen, setProfileOpen, addToPick, pickPic };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
