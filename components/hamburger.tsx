import tw, { styled } from "twin.macro";
import { MotionCol, MotionRow, Row } from "./base";
import 'twin.macro';

interface HamburgerProps {
    state: 'open' | 'closed';
    onClick: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({state, onClick}) => {
    return (
        <Container animate={state} onClick={onClick}>
            <HamburgerBar variants={hamburgerBarMotionVariants.top}/>
            <HamburgerBar variants={hamburgerBarMotionVariants.middle}/>
            <HamburgerBar variants={hamburgerBarMotionVariants.bottom}/>
        </Container>
    )
}

const Container = styled(MotionCol)(() => [
    tw`
       z-20
       h-full
       w-full
       justify-evenly
    `
])

const hamburgerBarHeight = 10; // percentage of parent container
const hamburgerBarHeightStr = `${hamburgerBarHeight}`

const HamburgerBar = styled(MotionRow)`
    ${tw`bg-bone`}
    ${tw`h-[${hamburgerBarHeightStr}% ]`}
    ${tw`drop-shadow-[0px 1px 1px black]`}
`

const hamburgerBarMotionVariants = {
    top: {
        closed: {},
        open: {
            rotate: 45,
            translateY: `${(((100 - (3*hamburgerBarHeight))/4)+hamburgerBarHeight)*10}%`,
            scale: -0.75,
            filter: "drop-shadow(0 0 #0000)"
        }
    },
    middle: {
        closed: {},
        open: {
            translateX: -100,
            opacity: 0
        }
    },
    bottom: {
        closed: {},
        open: {
            rotate: -45,
            translateY: `-${(((100 - (3*hamburgerBarHeight))/4)+hamburgerBarHeight)*10}%`,
            scale: -0.75,
            filter: "drop-shadow(0 0 #0000)"
        }
    }
}



export default Hamburger;