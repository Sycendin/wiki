import Footer from "../Footer/Footer";
import Nav from "../Nav";
import { Fragment } from "react";
// Wrap Nav and Footer around children for every page
export const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      {children} <Footer />
    </Fragment>
  );
};
