import { Fragment, useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ModalProducts from "./ModalProducts";
import PledgePageContent from "./PledgePageContent";

const PledgePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <PledgePageContent />
    </Fragment>
  );
};

export default PledgePage;
