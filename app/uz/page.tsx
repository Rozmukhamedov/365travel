import React from "react";
import Header from "../container/en/header";
import Main from "../container/en/main";
import Feedback from "../container/en/feedback";
import Travel from "../container/en/travel";
import Tours from "../container/en/tours";
import Work from "../container/en/work";

function En() {
  return (
    <div>
      <Header />
      <Main />
      <Feedback />
      {/* <Information /> */}
      <Tours />
      <Travel />
      <Work />
    </div>
  );
}

export default En;
