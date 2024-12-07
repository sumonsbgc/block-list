import Title from "@/components/common/Title";
import { aboutLeft } from "@/images";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full bg-gray-light mt-20">
      <article className="container py-11 flex xl:flex-row flex-col items-center gap-8">
        <Image src={aboutLeft} alt="Image of Mobile, Tablet and Laptop Devices" width={640} height={460} priority />
        <div className="flex flex-col gap-y-4">
          <strong className="max-w-fit inline-flex bg-brand-light py-2 px-5 rounded-lg text-base font-bold font-urbanist text-brand ">
            About us
          </strong>
          <Title
            variant="h2"
            content={
              <>
                Redefining Guest <br /> Management Solutions
              </>
            }
            className="lg:text-5xl text-4xl font-semibold text-primary leading-tight"
          />
          <div className="about-description flex flex-col gap-y-4">
            <p className="font-urbanist text-base font-normal text-primary">
              Blocklist.org helps hotel and apartment owners protect their
              properties by providing a reliable guest verification platform.
              With access to a shared database of thousands of hotel records,
              you can quickly identify high-risk guests who may cause property
              damage or violate policies
            </p>
            <p>
              Our mission is simple: empower you to make informed decisions,
              protect your investment, and create safer environments for your
              staff and future guests.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AboutSection;
