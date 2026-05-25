import Image from "next/image";
import { cn } from "~/lib/utils";

export default function About() {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-start",
        "w-full max-w-4xl xl:max-w-7xl",
        "px-8 md:px-16 lg:px-24 py-24 md:pt-32",
        "gap-10"
      )}
    >
      <Image
        src="/headshot.png"
        alt="Ryan Barrs headshot"
        width={384}
        height={384}
        className={cn(
          "border-2 rounded-full",
          "max-h-96 w-auto",
          "shadow-md shadow-black"
        )}
        priority
      />
      <p
        className={cn(
          "font-serif text-bone",
          "text-2xl lg:text-3xl leading-relaxed",
          "drop-shadow-lg"
        )}
      >
        I obtained my PhD in Bioengineering from Clemson University in 2023.
        <br />
        <br />
        For my doctoral research, I was based in Charleston, SC at the Medical University of South
        Carolina through a joint program with Clemson. This experience immersed me in a research
        hospital environment and influenced my passion for applying engineering principles to
        translational medicine.
        <br />
        <br />
        I have authored nine peer-reviewed publications, mentored five undergraduate students, and
        was awarded the prestigious Ruth L. Kirschstein F31 predoctoral fellowship from the National
        Heart, Lung, and Blood Institute (NHLBI) to support my doctoral research in cardiovascular
        tissue engineering.
        <br />
        <br />
        Outside of the lab, I am active in science communication and enjoy cooking, roasting coffee,
        discovering new music, and playing the ancient Irish sport of hurling with the Charleston
        Hurling Club.
      </p>
    </div>
  );
}
