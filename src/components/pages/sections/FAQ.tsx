'use client';
import React from "react";
import Title from "@/components/common/Title";
// import { faqs } from "@/utility/data/faq";
// import FaqAccordion from "./FaqAccordion";

const FAQ = () => {
  return (
    <div className="w-full mt-20">
      <div className="container flex flex-col items-center">
        <Title
          content="FAQs"
          variant="h2"
          className="lg:text-5xl text-4xl text-primary font-semibold capitalize"
        />

        <p className="font-urbanist text-base font-medium text-primary mt-4 max-w-[555px] text-center">
          Find answers to common questions about using Blocklist.org, managing
          guest information, subscriptions, and more.
        </p>

        <div className="mt-9 grid gap-6 w-full">
          {/* <FaqAccordion data={faqs} /> */}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
