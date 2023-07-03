import { DiscussionEmbed } from "disqus-react";
import { server } from "../pages/config";
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
