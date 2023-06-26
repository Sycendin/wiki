import { DiscussionEmbed } from "disqus-react";
import react from "react";
const disqus = ({ url, identifier, title }) => {
  <DiscussionEmbed
    shortname="example"
    config={{
      // url: this.props.article.url,
      // identifier: this.props.article.id,
      // title: this.props.article.title,
      url: url,
      identifier: identifier,
      title: title,
      // language: "zh_TW", //e.g. for Traditional Chinese (Taiwan)
    }}
  />;
};
export default disqus;
