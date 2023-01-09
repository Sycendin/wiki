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
  const [inputText, setInputText] = useState("");
  return (
    <Fragment>
      <div className="container is-centered  mb-3 border ">
        <DynamicDropdown type={ddClass} />
      </div>
      <Search setInputText={setInputText} />
      <ArticleList articles={articles} inputText={inputText} />
    </Fragment>
  );
};
export default SearchPlusList;
