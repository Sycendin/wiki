import { createContext, useState } from "react";

const addPicture = (picks, pickToAdd, clear = false) => {
  let existingPick = false;
  if (clear) {
    return [];
  } else {
    if (picks.length > 0) {
      existingPick = picks.find((pickItem) => pickItem.name === pickToAdd.name);
    }

    if (existingPick) {
      return picks;
    }
    // Don't add if already there
    // if (existingPick) {
    //   return picks.map((pickItem) =>
    //     pickItem.name === pickToAdd.name
    //       ? { ...pickItem, ammo: pickItem.ammo + 1 }
    //       : pickItem
    //   );
    // }
    else {
      return [pickToAdd];
    }
    // return [...picks, { ...pickToAdd }];
    // return [...pick, { ...pickToAdd, quantity: 1 }];
  }
};
export const ProfileContext = createContext({
  profileOpen: false,
  setProfileOpen: () => null,
  pickPic: [],
  addPick: () => {},
  tempUpdate: false,
  setTempUpdate: () => null,
  profileOptions: false,
  setProfileOptions: () => null,
});

export const ProfileProvider = ({ children }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [pickPic, setPick] = useState([]);
  const [tempUpdate, setTempUpdate] = useState([]);
  const [profileOptions, setProfileOptions] = useState(false);
  const updateTempUpdate = () => {
    console.log("temp update");
    setTempUpdate(!tempUpdate);
  };
  const addToPick = (pickToAdd, clear) => {
    setPick(addPicture(pickPic, pickToAdd, clear));
    console.log(pickPic);
  };
  const value = {
    profileOpen,
    setProfileOpen,
    addToPick,
    pickPic,
    tempUpdate,
    updateTempUpdate,
    profileOptions,
    setProfileOptions,
  };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
