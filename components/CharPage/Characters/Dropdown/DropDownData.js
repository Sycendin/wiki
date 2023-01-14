// weapon: "Rocket Launcher",
// class: "Defender",
// manufacturer: "Tetra",
// element: "Earth",
// squad: "Counters",
// position: "Burst 2",
// burstCD: "20",
// role: ["Tank", "Debuffer"],

export const ddBurst = ["20", "40"];

export const ddClass = ["Attacker", "Defender", "Support"];

export const ddElement = ["Earth", "Electric", "Fire", "Water", "Wind"];

export const ddWeapon = [
  "Assault Rifle",
  "Machine Gun",
  "Rocket Launcher",
  "Shotgun",
  "SMG",
  "Sniper",
];

export const ddManufacturer = ["Elysion", "Missilis", "Pilgrim", "Tetra"];
// Export above arrays as one big array
export const ddData = [ddClass, ddWeapon, ddManufacturer, ddElement, ddBurst];

export const dropdownNames = [
  "Class",
  "Weapon",
  "Manufacturer",
  "Element",
  "Burst",
];
