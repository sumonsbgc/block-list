import Title from "@/components/common/Title";
import { cog, member, plain, userBlock } from "@/images";
import Image from "next/image";
import React from "react";

type IHowItWorksBox = {
  iconUrl: string;
  iconBg?: string;
  title: string;
  content: string;
};

export const HowItWorksBox = ({
  title,
  content,
  iconUrl,
  iconBg = "bg-gray-light",
}: IHowItWorksBox) => {
  return (
    <div
      className="w-full flex flex-col items-center gap-4 bg-white rounded-xl px-3 pb-6"
      style={{
        boxShadow:
          "0px 1px 4px 0px rgba(17, 17, 17, 0.08), 0px 1px 2px -1px rgba(17, 17, 17, 0.10)",
      }}
    >
      <div className={`py-6 px-3  max-w-fit rounded-b-full ${iconBg}`}>
        <Image
          src={iconUrl}
          alt="Search the Guest Database"
          width={86}
          height={86}
          priority
        />
      </div>
      <Title
        content={title}
        variant="h4"
        className="text-xl text-primary font-semibold"
      />
      <p className="font-urbanist text-sm font-normal text-secondary text-center">
        {content}
      </p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="w-full mt-20">
      <div className="container flex flex-col items-center">
        <Title
          content="How it works"
          variant="h2"
          className="lg:text-5xl text-4xl text-primary font-semibold capitalize"
        />
        <p className="font-urbanist text-base font-medium text-primary mt-2">
          Effortless Steps to Streamline Your Guest Management
        </p>

        <div
          className="mt-9 grid gap-6 w-full"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(306px, 1fr))",
          }}
        >
          <HowItWorksBox
            iconBg="bg-gray-light"
            iconUrl={member}
            title="Search the Guest Database"
            content="Enter guest details like name, phone number, or email. Our system will instantly check thousands of hotel records to identify any history of issues or violations."
          />
          <HowItWorksBox
            iconBg="bg-red-50"
            iconUrl={userBlock}
            title="Add a Guest to the Blocklist"
            content="Had a problematic guest? Report the incident, whether it's property damage, policy violations, or other concerns. Your input helps build a safer hospitality community."
          />
          <HowItWorksBox
            iconBg="bg-brand-light"
            iconUrl={plain}
            title="Guest Appeal Process"
            content="To ensure fairness, guests can request removal from the Blocklist. Each appeal is reviewed by our team to maintain ethical practices."
          />
          <HowItWorksBox
            iconBg="bg-warning-light"
            iconUrl={cog}
            title="Seamless Integration"
            content="Use our open API to integrate the Blocklist with your existing property management software for faster and more efficient guest verification."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
