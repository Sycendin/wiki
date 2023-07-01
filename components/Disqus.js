import { DiscussionEmbed } from "disqus-react";
import { server } from "../../config";
const Disqus = ({ identifier, title }) => {
  const disqusShortname = "nikkegame";
  const disqusConfig = {
    url: server,
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
