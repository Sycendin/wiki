import { Fragment } from "react";

const Search = ({ input }) => {
  return (
    <Fragment>
      <div className="container is-centered has-background-white mb-3 border ">
        <input class="input is-primary" type="text" placeholder="Text input" />
      </div>
    </Fragment>
  );
};
export default Search;
