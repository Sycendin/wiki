import { Fragment } from "react";
import { React, useState } from "react";
import dynamic from "next/dynamic";
import { ddClass, ddWeapon } from "./Characters/Dropdown/DropDownData";
// Render Dropdown on client side rather than server side
const DynamicDropdown = dynamic(
  () => import("./Characters/Dropdown/Dropdown"),
  {
    ssr: false,
  }
);
import ArticleList from "./Characters/ArticleList";
import Search from "./Characters/Search";
const SearchPlusList = ({ articles }) => {
  // State that tracks text search
  const [inputText, setInputText] = useState("");
  // State that tracks dropdown filter
  const [ddObject, setDDObject] = useState({
    class: "Class",
    weapon: "Weapon",
    manufacture: "Manufacture",
    element: "Element",
    burst: "Burst",
  });
  return (
    <Fragment>
      <div className="container is-centered  mb-3 border ">
        <DynamicDropdown
          type={ddClass}
          ddObject={ddObject}
          setDDObject={setDDObject}
        />
      </div>
      <Search setInputText={setInputText} />
      <ArticleList articles={articles} inputText={inputText} />
    </Fragment>
  );
};
export default SearchPlusList;
