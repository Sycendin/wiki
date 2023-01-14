// Class,Weapon,Manufacturer,Element,Burst, import names
import { dropdownNames } from "../CharPage/Characters/Dropdown/DropDownData";
// Function that combines to filter by dropdown and input text
export const filter = (articles, ddFilter, inputText) => {
  let temp = [];
  // Loop through each character element
  articles.forEach((element, index) => {
    let check = 5;
    // If input has text that matches name continue
    if (element.name.toLowerCase().includes(inputText)) {
      // Check if each filter on dropdown is enabled and if it is check if that char has that property, if they don't decrement check
      if (
        ddFilter.class !== dropdownNames[0] &&
        !element.class.includes(ddFilter.class)
      ) {
        check = check - 1;
      }
      if (
        ddFilter.weapon !== dropdownNames[1] &&
        !element.weapon.includes(ddFilter.weapon)
      ) {
        check = check - 1;
      }
      if (
        ddFilter.manufacturer !== dropdownNames[2] &&
        !element.manufacturer.includes(ddFilter.manufacturer)
      ) {
        check = check - 1;
      }
      if (
        ddFilter.element !== dropdownNames[3] &&
        !element.element.includes(ddFilter.element)
      ) {
        check = check - 1;
      }
      if (
        ddFilter.burst !== dropdownNames[4] &&
        !element.burstCD.includes(ddFilter.burst)
      ) {
        check = check - 1;
      }
      // If character matches input text and dropdown filters add it to temp array
      if (check === 5) {
        temp.push(element);
      }
    }
  });
  // Return final array
  return temp;
};
