import { cn } from "~/lib/utils";

type HamburgerProps = {
  isOpen: boolean;
};

const bar = cn(
  "block w-full",
  "h-[3px] lg:h-[3.5px]",
  "bg-bone",
  "transition-all duration-200"
);

export default function Hamburger({ isOpen }: HamburgerProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between",
        "h-5 lg:h-5.5 w-[30px] lg:w-[36px]"
      )}
    >
      <span className={cn(bar, "origin-center", isOpen ? "translate-y-[9px] rotate-45" : "")} />
      <span className={cn(bar, isOpen ? "opacity-0" : "")} />
      <span className={cn(bar, "origin-center", isOpen ? "-translate-y-[9px] -rotate-45" : "")} />
    </div>
  );
}
