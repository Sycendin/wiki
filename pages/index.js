import { server } from "./config";
// import Head from "next/head";
import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import Nav from "../components/nav";
import SearchPlusList from "../components/SearchPlusList";
export default function Home({ articles }) {
  return (
    <div>
      <Meta />

      <Nav />
      <div className="ap">aa</div>
      {/* <Head>
        <title>WebDev Stuff</title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
      <button className="button">Button</button>
      <h1>Welcome to next</h1>
      <SearchPlusList articles={articles} />
      {/* <ArticleList articles={articles} /> */}
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
