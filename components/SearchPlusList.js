import { Fragment } from "react";
import { React, useState } from "react";
import ArticleList from "./ArticleList";
import Search from "./Search";
const SearchPlusList = ({ articles }) => {
  const [inputText, setInputText] = useState("");
  return (
    <Fragment>
      <Search setInputText={setInputText} />
      <ArticleList articles={articles} inputText={inputText} />
    </Fragment>
  );
};
export default SearchPlusList;
