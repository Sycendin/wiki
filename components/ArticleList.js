import { Fragment } from "react";
import ArticleItem from "./ArticleItem";
import Search from "./Search";
import articleStyles from "../styles/article.module.css";
const ArticleList = ({ articles }) => {
  return (
    <Fragment>
      <Search />
      <div className="container has-background-grey border">
        <div className="columns is-centered is-flex-wrap-wrap">
          {articles.map((article, index) => (
            <ArticleItem key={index} article={article}></ArticleItem>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ArticleList;
