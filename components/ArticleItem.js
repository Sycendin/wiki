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
          <div>
            <p>{article.squad}</p>
            <p>{article.weapon}</p>
            <p>{article.class}</p>
            <p>{article.manufacturer}</p>
            <p>{article.element}</p>
          </div>
        </div>
      </Link>
      {/* <div className="container">
        <div className="columns">
          <div className="column is 3">
            <h1 className="is-size-1 title">Dockler</h1>
            <h1 className="is-size-2 subtitle">dark roastr</h1>
            <p>extra text</p>
          </div>
          <div className="column is-4">
            <div className="is-size-4 mb4">10.95</div>
            <p className="mb-4">Lorem</p>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};
export default ArticleItem;
