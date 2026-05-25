"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "~/lib/utils";

type FullScreenMenuProps = {
  isOpen: boolean;
  links: { linkType: "external" | "local"; text: string; href: string }[];
  onClickLink: () => void;
};

export default function FullScreenMenu({ isOpen, links, onClickLink }: FullScreenMenuProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-20",
        "flex items-center justify-center",
        "backdrop-blur-3xl"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <nav className={cn(
        "flex flex-col items-start gap-4", 
        "px-6",
        "group"
      )}>
        {links.map((l) => (
          <Link
            key={l.text}
            href={l.href}
            target={l.linkType === "external" ? "_blank" : undefined}
            rel={l.linkType === "external" ? "noopener noreferrer" : undefined}
            onClick={onClickLink}
            className={cn(
              "w-full px-2 text-left",
              "font-bold font-serif text-bone",
              "text-4xl md:text-5xl lg:text-6xl",
              "[text-shadow:_2px_2px_3px_#212121]",
              "transition-all duration-200",
              "group-hover:opacity-25 group-hover:blur-[2px]",
              "hover:!opacity-100 hover:!blur-none hover:translate-x-3"
            )}
          >
            {l.text}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
