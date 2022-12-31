import { articles } from "../../../data";
import { charData } from "../../../chardata";
export default function handler(req, res) {
  // res.status(200).json(articles);
  res.status(200).json(charData);
}
