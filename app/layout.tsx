import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "Ryan Barrs",
  description: "Ryan Barrs's personal website",
};

export const viewport: Viewport = {
  themeColor: '#55657F',
}

const canelaDeck = localFont({
  src: [
    {
      path: '../public/fonts/CanelaDeck.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/CanelaDeck-Bold.otf',
      weight: '700',
      style: 'bold',
    }
  ],
  variable: '--font-canelaDeck'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head/>
      <body className={`${canelaDeck.variable} antialiased`}>
        <AppContainer>
          <Header/>
          <ContentContainer>
            {children}
          </ContentContainer>
          <Footer/>
        </AppContainer>
      </body>
    </html>
  );
}

const AppContainer = (props: {children: React.ReactNode}) => (
  <div
    className={`
      flex
      flex-col
      min-h-screen
      w-screen [&>*]:max-w-[2000px]
      justify-between
      items-center
      px-5 md:px-16
      animate-fadeIn
    `}
  >
    {props.children}
  </div>
)

const ContentContainer = (props: {children: React.ReactNode}) => (
  <div 
    className={`
      flex
      flex-col
      w-full
      justify-start
    `}
  >
    {props.children}
  </div>
)