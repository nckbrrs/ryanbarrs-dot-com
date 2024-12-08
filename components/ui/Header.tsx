"use client"
import { useState } from 'react';
import CVPDF from '../../public/cv.pdf';
import Resume from '../../public/resume.pdf';
import Hamburger from './Hamburger';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import Link from 'next/link';

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
        // {
        //     linkType: 'external',
        //     text: 'CV',
        //     href: CVPDF
        // },
        {
            linkType: 'external',
            text: 'Resume',
            href: Resume
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
                    <FullScreenMenuContainer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <MenuLinksCol>
                            {links.map((l) => 
                                l.linkType === 'external' ? (
                                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                                        <LinkText>{l.text}</LinkText>
                                    </a>
                                ) : (
                                    <Link href={`${l.href}`} onClick={(() => setHamburgerState('closed'))} >
                                        <LinkText>{l.text}</LinkText>
                                    </Link>
                                )
                            )}
                        </MenuLinksCol>
                    </FullScreenMenuContainer>
                }
            </AnimatePresence>
        </Container>
    )
}

const Container = (props: {children: React.ReactNode}) => (
    <div
        className={`
            w-full
            flex
            flex-row
            justify-start
            items-center
            mt-6 sm:mt-10 md:mt-12 lg:mt-20
            h-10
            overflow-hidden
        `}
    >
        {props.children}
    </div>
)

const HamburgerContainer = (props: {children: React.ReactNode}  & {onClick: () => void}) => (
    <div
        onClick={props.onClick}
        className={`
            flex
            flex-col
            z-20
            h-full
            aspect-square
            cursor-pointer
            fill-bone
            duration-75
            hover:scale-110
        `}
    >
        {props.children}
</div>
)

const FullScreenMenuContainer = (props: HTMLMotionProps<"div">) => (
    <motion.div 
        initial={props.initial}
        animate={props.animate}
        exit={props.exit}
        className={`
            flex flex-row 
            w-full 
            h-full 
            left-0 
            top-0 
            z-10 
            absolute 
            justify-center 
            items-center
            backdrop-blur-3xl`
        }
    >
        {props.children}
    </motion.div >
)

const MenuLinksCol = (props: {children: React.ReactNode}) => (
    <div 
        className={`
            flex
            flex-col
            flex-wrap
            group
            items-start
            justify-center
            space-y-0 lg:space-y-1
            translate-y-2`
        }
    >
        {props.children}
    </div>
)

const LinkText = (props: {children: React.ReactNode}) => (
    <p 
        className={`
            w-full
            px-2
            text-4xl md:text-5xl lg:text-7xl
            font-bold
            text-left
            text-bone
            duration-200
            font-serif
            group-hover:opacity-25
            group-hover:blur-[2px]
            hover:!opacity-100
            hover:!blur-0
            hover:translate-x-3
            [text-shadow:_2px_2px_3px_#212121]`
        }
    >
        {props.children}
    </p>
)

export default Header;