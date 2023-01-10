import { articles } from "../../../data";
import { charData } from "../../../chardata";
export default function handler({ query: { id } }, res) {
  const filtered = charData.filter((char) => char.name === id);
  console.log(id);
  // const filtered = articles.filter((data) => data.id === id);
  // console.log(charData.filter((char) => char.name === id));
  // console.log(charData.filter((char) => char.id === id));
  // console.log(articles.filter((data) => data.id === id));
  if (filtered.length > 0) {
    console.log(filtered[0]);
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${char.name} is not found ` });
  }
  // res.status(200).json(articles);
}
