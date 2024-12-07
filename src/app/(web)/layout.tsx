import React from "react";
import Header from "../partial/Header";
import Footer from "../partial/Footer";

const Weblayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="pb-20">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Weblayout;
