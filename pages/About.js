// import Head from "next/head";
import "bulma/sass/utilities/_all.sass";
import "bulma/sass/elements/button.sass";
import Meta from "../components/Meta";

const about = () => {
  return (
    <div>
      {/* <Head> */}
      <Meta title="About" />
      <title>About</title>
      {/* </Head> */}
      <h1>About</h1>
      <p>This is a wiki about shows</p>
      <button class="button is-primary">Primary button</button>
    </div>
  );
};

export default about;
