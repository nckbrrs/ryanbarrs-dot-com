import Head from 'next/head'
import { Col, Row } from '../components/base';
import 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>Ryan Barrs / About</title>
    </Head>
    <Col tw="h-full justify-center items-center">
      {/* <Col tw="w-full h-fit xl:h-full my-8 xl:mt-10 xl:mb-14 max-w-[1300px] px-8 xl:px-4 xl:space-x-8 xl:flex-row"> */}
      <Col tw="w-full h-fit my-8 max-w-[1300px] px-8 xl:w-4/5">
        {/* headshot */}
        <Row tw="h-full justify-center items-center">
          <Row tw="aspect-square">
            <img src="headshot.png" tw="border-2 rounded-full shadow-md shadow-black max-h-96"/>
          </Row>
        </Row>

        {/* about */}
        <Col tw="justify-center pt-12 pb-12">
          <p tw="font-canelaDeck text-white tracking-wide text-2xl md:text-2xl drop-shadow-[1px 1px 1px black]">
          I obtained my PhD in Bioengineering from Clemson University in 2023.<br/><br/>
          For my doctoral research, I was based in Charleston, SC at the Medical University of South Carolina through a joint program with Clemson. This experience immersed me in a research hospital environment and influenced my passion for applying engineering principles to translational medicine.<br/><br/>
          I have authored nine peer-reviewed publications, mentored five undergraduate students, and was awarded the prestigious Ruth L. Kirschstein F31 predoctoral fellowship from the National Heart, Lung, and Blood Institute (NHLBI) to support my doctoral research in cardiovascular tissue engineering.<br/><br/>
          Outside of the lab, I am active in science communication and enjoy cooking, roasting coffee, discovering new music, and playing the ancient Irish sport of hurling with the Charleston Hurling Club.
          </p>
        </Col>
      </Col>
    </Col>
  </>
)

export default Home