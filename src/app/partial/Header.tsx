import React from "react";
import Image from "next/image";
import logo from "../../images/brand/logo.svg";
import { headerNavigations } from "@/utility/data/navigation";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-white py-7 sticky top-0 z-50"
      style={{
        boxShadow:
          "0px 4px 7px -1px rgba(17, 17, 17, 0.10), 0px 2px 4px -2px rgba(17, 17, 17, 0.05)",
      }}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" prefetch>
          <Image src={logo} alt="Logo: Block List" width={190} height={46} priority />
        </Link>
        <nav className="flex items-center gap-9">
          <ul className="flex items-center gap-9">
            {headerNavigations?.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="text-base font-semibold text-primary font-urbanist"
                  prefetch
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact-us"
            className="btn btn-brand font-medium py-4 min-w-40 px-10 rounded-lg"
            prefetch
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
