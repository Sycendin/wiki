import Meta from "../../../components/Meta";
import { server } from "../../config";
import Link from "next/link";
const article = ({ article }) => {
  return (
    <div>
      <Meta title={article.title} description={article.excerpt} />
      <h1>This is article {article.id}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </div>
  );
};
export default article;
