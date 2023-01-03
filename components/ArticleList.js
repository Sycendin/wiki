import { Fragment } from "react";
import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/article.module.css";
const ArticleList = ({ articles }) => {
  return (
    <Fragment>
      <div className="container has-background-grey border">
        <div className="columns is-centered is-vcentered is-flex-wrap-wrap">
          {articles.map((article, index) => (
            <ArticleItem key={index} article={article}></ArticleItem>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ArticleList;
