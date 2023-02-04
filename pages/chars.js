import { server } from "./config";
// import Head from "next/head";
// import ArticleList from "../components/ArticleList";

import Meta from "../components/Meta";
import SearchPlusList from "../components/CharPage/SearchPlusList";
import { CharContext } from "../contexts/CharContext";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { Fragment, useContext } from "react";
import dynamic from "next/dynamic";
// Render Dropdown on client side rather than server side
import { NewVisit } from "../components/NewVisit/NewVisit";
const DynamicVisit = dynamic(() => import("../components/NewVisit/NewVisit"), {
  ssr: false,
});
export default function Chars({ articles }) {
  const { charsInfo } = useContext(CharContext);
  return (
    <Wrapper>
      <div>
        <Meta />
        <Fragment>
          {/* <NewVisit /> */}
          <DynamicVisit />
        </Fragment>
        <div className="mt-3"></div>
        <SearchPlusList articles={articles} />
        {/* <ArticleList articles={articles} /> */}
      </div>
    </Wrapper>
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
