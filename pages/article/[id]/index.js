import Meta from "../../../components/Meta";
import { server } from "../../config";
import Link from "next/link";
import IndivChar from "../../../components/IndivChar/IndivChar";
const article = ({ article }) => {
  // console.log(article);
  return (
    <div>
      <Meta title={article.title} description={article.excerpt} />
      <h1>This is article {article.name}</h1>
      <p>{article.body}</p>
      <br />
      <IndivChar data={article} />
      <Link href="/">
        <button className="button is-primary">Go back</button>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);

  const articles = await res.json();
  const names = articles.map((article) => article.name);
  // Generate paths for ids
  const paths = names.map((name) => ({ params: { id: name.toString() } }));
  return {
    // return paths
    paths,
    // go to 404 page if doesnt exist
    fallback: false,
  };
};

export default article;
