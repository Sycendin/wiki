import { server } from "./config";
// import Head from "next/head";
// import ArticleList from "../components/ArticleList";

import Meta from "../components/Meta";
import Nav from "../components/nav";
import SearchPlusList from "../components/CharPage/SearchPlusList";
import { CharContext } from "../contexts/CharContext";

import { useContext } from "react";
export default function Chars({ articles }) {
  const { charsInfo } = useContext(CharContext);
  return (
    <div>
      <Meta />
      <Nav />
      <div className="mt-3"></div>
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
