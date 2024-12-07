"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../images/brand/footer-logo.svg";
// import { useGetCurrentYear } from "@/components";

const Footer = () => {
  // const currentYear = useGetCurrentYear();

  return (
    <footer className="bg-brand-deep py-16 mt-20">
      <div className="container">
        <div className="grid grid-cols-4 gap-6 mb-36">
          <Link href="/" className="relative" prefetch>
            <Image src={logo} alt="Logo: Block List" width={160} height={36} priority />
          </Link>
          <div className="flex justify-between gap-6 col-start-2 -col-end-1">
            <div className="flex flex-col gap-6">
              <h2 className="text-white/40 capitalize font-medium font-urbanist text-lg">
                Info
              </h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="#about"
                    className="text-white font-urbanist text-base font-medium"
                    prefetch
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-white font-urbanist text-base font-medium"
                    prefetch
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact-us"
                    className="text-white font-urbanist text-base font-medium"
                    prefetch
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-white/40 capitalize font-medium font-urbanist text-lg">
                Contact us
              </h2>
              <div className="flex flex-col gap-3 max-w-72">
                <Link
                  href="tel:+1 800 (256-2547)"
                  className="text-white font-urbanist text-base font-medium"
                  prefetch
                >
                  +1 800 (256-2547)
                </Link>
                <Link
                  href="mailto: support@blocklist.org"
                  className="text-white font-urbanist text-base font-medium"
                  prefetch
                >
                  support@blocklist.org
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-white/40 capitalize font-medium font-urbanist text-lg">
                Find us
              </h2>
              <div className="text-white font-urbanist text-base max-w-72 not-italic font-medium capitalize">
                123 Hospitality Lane, Service City, CA, USA
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <p className="text-white/40 font-urbanist text-sm">
            &copy; 2024 — Copyright
            {/* &copy; {currentYear} — Copyright */}
          </p>
          <Link className="text-white/40 font-urbanist text-sm" href="/privacy" prefetch>
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
