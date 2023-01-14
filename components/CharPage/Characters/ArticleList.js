import { Fragment } from "react";
import ArticleItem from "./ArticleItem";
import articlesStyles from "../../../styles/article.module.css";
import { filter } from "../../HelperFunctions/HelperFunctions";
const ArticleList = ({ articles, inputText, ddFilter }) => {
  let temp = [];
  if (inputText !== "") {
    temp = filter(articles, ddFilter, inputText);
  } else if (
    ddFilter.class !== "Class" ||
    ddFilter.weapon !== "Weapon" ||
    ddFilter.manufacture !== "Manufacture" ||
    ddFilter.burst !== "Burst" ||
    ddFilter.element !== "Element"
  ) {
    temp = filter(articles, ddFilter, inputText);
  }
  // JSON.stringify(obj1) === JSON.stringify(obj2)
  return (
    <Fragment>
      <div className="container has-background-grey border">
        <div className="columns is-centered is-flex-wrap-wrap">
          {inputText !== ""
            ? temp.map((article, index) => (
                <ArticleItem key={index} article={article}></ArticleItem>
              ))
            : ddFilter.class !== "Class" ||
              ddFilter.weapon !== "Weapon" ||
              ddFilter.manufacturer !== "Manufacturer" ||
              ddFilter.burstCD !== "Burst" ||
              ddFilter.element !== "Element"
            ? temp.map((article, index) => (
                <ArticleItem key={index} article={article}></ArticleItem>
              ))
            : articles.map((article, index) => (
                <ArticleItem key={index} article={article}></ArticleItem>
              ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ArticleList;
