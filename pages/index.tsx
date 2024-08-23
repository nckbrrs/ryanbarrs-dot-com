import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>Ryan Barrs / Home</title>
    </Head>
    <Col tw="sm:pt-12 h-full justify-center items-center space-y-10 md:space-y-12">
      <p tw="text-white text-5xl md:text-7xl tracking-wide font-canelaDeck-Bold font-[600] drop-shadow-[0px 1px 2px black] md:drop-shadow-[0px 3px 4px black]">Hi, I'm Ryan.</p>
      <p tw="w-fit text-center text-white tracking-wide font-canelaDeck text-3xl sm:text-4xl md:text-5xl xl:text-6xl drop-shadow-[0px 2px 2px black]">I am fixing broken hearts with bioengineering.</p>
      <p tw="w-fit text-center text-white tracking-wide font-canelaDeck text-3xl sm:text-4xl md:text-5xl xl:text-6xl drop-shadow-[0px 2px 2px black]">Let's work together.</p>
    </Col>
  </>
)

export default Home