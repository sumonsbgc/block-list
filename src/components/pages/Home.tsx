import React from "react";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import HowItWorks from "./sections/HowItWorks";
import Subscription from "./sections/Subscription";
import FAQ from "./sections/FAQ";

export const homeSections = [
  {
    id: 1,
    segment: "",
    component: <HeroSection />,
  },
  {
    id: 2,
    segment: "about",
    component: <AboutSection />,
  },
  {
    id: 3,
    segment: "how-it-works",
    component: <HowItWorks />,
  },
  {
    id: 4,
    segment: "subscription",
    component: <Subscription />,
  },
  {
    id: 5,
    segment: "faq",
    component: <FAQ />,
  },
];

const Home = () => {
  return homeSections?.map((item) => (
    <section key={item.id} id={item.segment}>
      {item.component}
    </section>
  ));
};

export default Home;
