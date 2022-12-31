import { Fragment } from "react";
import Link from "next/link";
import articlesStyles from "../styles/article.module.css";
const ArticleItem = ({ article }) => {
  const imgName = article.art;
  return (
    <Fragment>
      <Link href="/article/[id]" as={`/article/${article.name}`}>
        <div className={articlesStyles.card}>
          <h3>{article.name}</h3>
          <img
            alt="art"
            // height={64}
            // width={64}
            src={article.art}
          ></img>
          <p>{article.squad}</p>
          <p>{article.weapon}</p>
          <p>{article.class}</p>
          <p>{article.manufacturer}</p>
          <p>{article.element}</p>
        </div>
      </Link>
    </Fragment>
  );
};
export default ArticleItem;
