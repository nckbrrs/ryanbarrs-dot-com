"use client";

import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import { useMenuState } from "~/hooks/useMenuState";
import { cn } from "~/lib/utils";

const links: { linkType: "external" | "local"; text: string; href: string }[] = [
  { linkType: "local", text: "Home", href: "/" },
  { linkType: "local", text: "About Me", href: "/about" },
  {
    linkType: "external",
    text: "Publications",
    href: "https://scholar.google.com/citations?user=-0jD4_wAAAAJ",
  },
  {
    linkType: "external",
    text: "Science Communications",
    href: "https://www.clippings.me/ryanbarrs",
  },
  { linkType: "external", text: "CV", href: "/cv.pdf" },
  { linkType: "external", text: "LinkedIn", href: "https://www.linkedin.com/in/ryanbarrs" },
  { linkType: "external", text: "Email", href: "mailto:barrsr@icloud.com" },
];

export default function TopNav() {
  const { isOpen, close, toggle } = useMenuState();

  return (
    <>
      <FullScreenMenu isOpen={isOpen} links={links} onClickLink={close} />
      <button
        onClick={toggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={cn(
          "flex items-center justify-center",
          "w-10 h-10",
          "absolute left-7 md:left-10 lg:left-18 top-7 md:top-10 lg:top-18",
          "z-20",
          "cursor-pointer rounded-md",
          "transition-transform duration-75",
          "hover:scale-110"
        )}
      >
        <Hamburger isOpen={isOpen} />
      </button>
    </>
  );
}
