import { DiscussionEmbed } from "disqus-react";
import react from "react";
const Disqus = ({ url, identifier, title }) => {
  const disqusShortname = "nikkegame";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: identifier,
    title: title,
  };
  return (
    <DiscussionEmbed
      shortname={disqusShortname}
      config={{
        disqusConfig,
      }}
    />
  );
};
export default Disqus;
