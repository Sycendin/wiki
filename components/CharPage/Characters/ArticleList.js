import { Fragment } from "react";
import ArticleItem from "./ArticleItem";
import articlesStyles from "../../../styles/article.module.css";
const ArticleList = ({ articles, inputText }) => {
  let temp = [];
  if (inputText !== "") {
    temp = [];
    articles.forEach((element) => {
      if (element.name.toLowerCase().includes(inputText)) {
        temp.push(element);
      }
    });
  }
  return (
    <Fragment>
      <div className="container has-background-grey border">
        <div className="columns is-centered is-flex-wrap-wrap">
          {inputText === ""
            ? articles.map((article, index) => (
                <ArticleItem key={index} article={article}></ArticleItem>
              ))
            : temp.map((article, index) => (
                <ArticleItem key={index} article={article}></ArticleItem>
              ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ArticleList;
