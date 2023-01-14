import { Fragment } from "react";
import ArticleItem from "./ArticleItem";
import articlesStyles from "../../../styles/article.module.css";
const ArticleList = ({ articles, inputText, ddFilter }) => {
  let temp = [];
  let check = 5;
  let filtertemp = [];
  if (inputText !== "") {
    temp = [];
    articles.forEach((element) => {
      check = 5;
      if (element.name.toLowerCase().includes(inputText)) {
        if (
          ddFilter.class !== "Class" &&
          element.class.includes(ddFilter.class)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.weapon !== "Weapon" &&
          element.weapon.includes(ddFilter.weapon)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.manufacturer !== "Manufacturer" &&
          !element.manufacturer.includes(ddFilter.manufacturer)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.element !== "Element" &&
          !element.element.includes(ddFilter.element)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.burst !== "Burst" &&
          !element.burstCD.includes(ddFilter.burst)
        ) {
          check = check - 1;
        }
        if (check === 5) {
          temp.push(element);
        }
      }
    });
  } else if (
    ddFilter.class !== "Class" ||
    ddFilter.weapon !== "Weapon" ||
    ddFilter.manufacture !== "Manufacture" ||
    ddFilter.burst !== "Burst" ||
    ddFilter.element !== "Element"
  ) {
    filtertemp = [];
    articles.forEach((element) => {
      check = 5;
      if (element.name.toLowerCase().includes(inputText)) {
        if (
          ddFilter.class !== "Class" &&
          !element.class.includes(ddFilter.class)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.weapon !== "Weapon" &&
          !element.weapon.includes(ddFilter.weapon)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.manufacturer !== "Manufacturer" &&
          !element.manufacturer.includes(ddFilter.manufacturer)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.element !== "Element" &&
          !element.element.includes(ddFilter.element)
        ) {
          check = check - 1;
        }
        if (
          ddFilter.burst !== "Burst" &&
          !element.burstCD.includes(ddFilter.burst)
        ) {
          check = check - 1;
        }
        if (check === 5) {
          filtertemp.push(element);
        }
      }
    });
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
            ? filtertemp.map((article, index) => (
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
