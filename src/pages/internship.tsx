import React from "react";
import InternNavbar from "../components/internship/intern-navbar";
import GetStart from "../components/internship/get-start";
import Services from "../components/internship/services";
import Programs from "../components/internship/programs";
import Heroes from "../components/internship/heroes";
import InternFooter from "../components/internship/intern-footer";

type Props = {};

const Internship = (props: Props) => {
  return (
    <>
      <InternNavbar />
      <GetStart />
      <Services />
      <Programs />
      <Heroes />
      <InternFooter />
    </>
  );
};

export default Internship;
