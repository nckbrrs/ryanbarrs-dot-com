import Head from 'next/head'
import { Col } from '../components/base';
import 'twin.macro';
import tw, { styled } from 'twin.macro';

const Home: React.FC<{users: any}> = ({ users }) => (
  <>
    <Head>
      <title>Ryan Barrs / Home</title>
    </Head>
    <Container>
      <HeaderText tw="">Hi, I'm Ryan.</HeaderText>
      <SubHeaderText>I am fixing broken hearts with bioengineering.</SubHeaderText>
      <SubHeaderText>Let's work together.</SubHeaderText>
    </Container>
  </>
)

const Container = styled(Col)(() => [
  tw`
    pt-8
    sm:pt-12
    h-full
    justify-center
    items-center
    space-y-10 md:space-y-12
  `
])

const HeaderText = styled.p(() => [
  tw`
    text-white
    text-5xl md:text-7xl 
    tracking-wide 
    font-canelaDeck-Bold 
    font-[600] 
    drop-shadow-[0px 1px 2px black] md:drop-shadow-[0px 3px 4px black]
  `
])

const SubHeaderText = styled.p(() => [
  tw`
    w-fit 
    text-center
    text-white
    tracking-wide
    font-canelaDeck
    text-3xl sm:text-4xl md:text-5xl xl:text-6xl 
    drop-shadow-[0px 2px 2px black]
  `
])

export default Home