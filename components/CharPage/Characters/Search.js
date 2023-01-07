import { Fragment } from "react";
import { React, useState } from "react";
const Search = ({ setInputText }) => {
  // const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <Fragment>
      <div className="container is-centered has-background-white mb-3 border ">
        <input
          className="input is-primary"
          type="text"
          placeholder="Text input"
          id="outlined-basic"
          onChange={inputHandler}
        />
      </div>
    </Fragment>
  );
};
export default Search;
