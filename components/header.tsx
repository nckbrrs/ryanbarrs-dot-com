import Link from 'next/link';
import { Col, Row } from './base';
import 'twin.macro';
import CVPDF from '../public/cv.pdf';
import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { AnimatePresence } from 'framer-motion';
import Hamburger from './hamburger';

const Header: React.FC = () => {
    const [hamburgerState, setHamburgerState] = useState<'open' | 'closed'>('closed');
    const onClickHamburger = () => {
        setHamburgerState(hamburgerState === 'closed' ? 'open' : 'closed');
    }

    if (typeof window !== 'undefined') {
        document.onkeydown = ((event) => {
            if (event.key === "Escape") {
                setHamburgerState('closed')
            }
        })
    }

    const links: {linkType: 'external' | 'local', text: string, href: string}[] = [
        { 
            linkType: 'local',
            text: 'Home',
            href: '/'
        },
        {
            linkType: 'local',
            text: 'About Me',
            href: '/about'
        },
        {
            linkType: 'external',
            text: 'Publications',
            href: 'https://scholar.google.com/citations?user=5a-G8F4AAAAJ&hl=en'
        },
        {
            linkType: 'external',
            text: 'Clippings',
            href: 'https://www.clippings.me/ryanbarrs'
        },
        {
            linkType: 'external',
            text: 'CV',
            href: CVPDF
        },
        {
            linkType: 'external',
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ryanbarrs'
        },
        
        {
            linkType: 'external',
            text: 'Email',
            href: 'mailto:barrsr@icloud.com'
        }
    ]

    return (
        <Container>
            <HamburgerContainer onClick={onClickHamburger}>
                <Hamburger state={hamburgerState} onClick={onClickHamburger}/>
            </HamburgerContainer>
            <AnimatePresence>
                {hamburgerState === 'open' && 
                    <MenuContainer 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <MenuLinksCol className="group">
                            {links.map((l) => 
                                l.linkType === 'external' ? (
                                    <a tw="w-full" href={l.href} target="_blank" rel="noopener noreferrer" onClick={(() => setHamburgerState('closed'))}>
                                        <LinkText>{l.text}</LinkText>
                                    </a>
                                ) : (
                                    <Link tw="w-full" href={`${l.href}`} onClick={(() => setHamburgerState('closed'))}>
                                        <LinkText>{l.text}</LinkText>
                                    </Link>
                                )
                            )}
                        </MenuLinksCol>
                    </MenuContainer>
                }
            </AnimatePresence>
        </Container>
    )
}

export default Header;

const Container = styled(Row)(() => [
    tw`
        justify-start
        items-center
        pt-6 sm:pt-10 md:pt-12 lg:pt-20
        overflow-hidden
    `
])

const MenuLinksCol = styled(Col)(() => [
    tw`
        flex-wrap
        items-center
        justify-center
        space-y-0 lg:space-y-0
        translate-y-2
    `
])

const HamburgerContainer = styled(Col)(() => [
    tw`
        z-20
        w-10
        h-10
        cursor-pointer
        duration-75
        hover:scale-110
    `
])

const LinkText = styled.p(() => [
    tw`
        w-full
        px-2
        text-4xl md:text-5xl lg:text-7xl
        text-bone
        // italic 
        text-left
        duration-200
        font-canelaDeck-Bold
        drop-shadow-[2px 2px 3px black]
        group-hover:opacity-25
        group-hover:blur-[2px]
        hover:!opacity-100
        hover:!blur-0
        hover:translate-x-3
    `
])

const MenuContainer = styled(Row)(() => [
    tw`
        w-full
        h-full
        left-0
        top-0
        z-10
        absolute
        justify-center
        items-center
        backdrop-blur-3xl
    `
])