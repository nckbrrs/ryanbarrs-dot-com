import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <div
      className={cn(
        "flex flex-col h-full items-center justify-center",
        "px-6 lg:px-0 gap-1 lg:gap-6",
        "font-serif text-bone"
      )}
    >
      <p
        className={cn(
          "font-bold text-center pt-20",
          "text-[5.5rem] sm:text-[7rem] lg:text-[10rem] xl:text-[12rem]",
          "leading-[5.5rem] sm:leading-[7rem] lg:leading-[9rem] xl:leading-[10rem]",
          "[text-shadow:_2px_2px_5px_#212121]"
        )}
      >
        Ryan Barrs
      </p>
      <p
        className={cn(
          "font-medium text-center",
          "w-80 sm:w-150 md:w-full",
          "text-3xl sm:text-4xl lg:text-5xl",
          "leading-[3rem] lg:leading-[4rem]"
        )}
      >
        is fixing broken hearts with bioengineering.
      </p>
    </div>
  );
}
