import { server } from "./config";
// import Head from "next/head";
// import ArticleList from "../components/ArticleList";
import Meta from "../components/Meta";
import SearchPlusList from "../components/CharPage/SearchPlusList";
import { Wrapper } from "../components/Wrapper/Wrapper";
export default function Home({ articles }) {
  return (
    <Wrapper>
      <div>
        <Meta />

        <div className="ap">aa</div>
        {/* <Head>
        <title>WebDev Stuff</title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
        <button className="button">Button</button>
        <h1>Welcome to next</h1>
        <SearchPlusList articles={articles} />
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
