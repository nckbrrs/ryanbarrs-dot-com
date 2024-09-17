"use client"

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <Container>
      <NameRow>
        <NameText>
          Ryan Barrs
        </NameText>
      </NameRow>
      <DescriptionRow>
        is fixing broken hearts with bioengineering.
      </DescriptionRow>
    </Container>
  )
}

export default Home;

const Container = (props: {children: React.ReactNode}) => (
  <div
    className={`
      lg:mt-24
      flex
      flex-col
      items-center
      justify-center
      h-full
      text-bone
      font-serif
    `}
  >
    {props.children}
  </div>
)

const NameRow = (props: {children: React.ReactNode}) => (
  <div
    className={`
      flex
      flex-row
    `}
  >
    {props.children}
  </div>
)

const DescriptionRow = (props: {children: React.ReactNode}) => (
  <p
    className={`
      mt-4 lg:mt-8
      text-4xl lg:text-5xl
      lg:max-w-full
      font-medium
      text-center
      leading-[3rem] lg:leading-[4rem]
    `}
  >
    {props.children}
  </p>
)

const NameText = (props: {children: React.ReactNode}) => (
  <p
    className={`
      -translate-x-2
      font-bold
      leading-[7rem] lg:leading-[8rem] xl:leading-[10rem]
      text-[7rem] lg:text-[10rem] xl:text-[12rem]
      text-center
      duration-100
      [text-shadow:_2px_2px_5px_#212121]
    `}
  >
    {props.children}
  </p>
)