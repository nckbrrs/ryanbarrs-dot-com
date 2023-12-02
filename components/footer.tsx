import { Col, Row  } from './base';
import 'twin.macro';
import AboutMeIcon from './icons/AboutMe';
import LinkedInIcon from './icons/LinkedIn';
import SciComIcon from './icons/SciCom';
import EmailIcon from './icons/Email';
import PublicationsIcon from './icons/Publications';
import Link from 'next/link';
import CVPDF from '../public/cv.pdf';
import CVIcon from './icons/CV';


const Footer: React.FC = () => {
    const footerLinks = [
        { 
            "name": "about",
            "text": "About Me",
            "href": "/about",
            "icon": <AboutMeIcon/>
        },
        {
            "name": "cv",
            "text": "CV",
            "href": CVPDF,
            "icon": <CVIcon/>
        },
        {
            "name": "linkedin",
            "text": "LinkedIn",
            "href": "https://www.linkedin.com/in/ryanbarrs",
            "icon": <LinkedInIcon/>
        },
        {
            "name": "sciCom",
            "text": "Science Communications",
            "href": "https://www.clippings.me/ryanbarrs",
            "icon": <SciComIcon/>
        },
        {
            "name": "pubs",
            "text": "Publications",
            "href": "https://scholar.google.com/citations?user=5a-G8F4AAAAJ&hl=en",
            "icon": <PublicationsIcon/>
        },
        {
            "name": "email",
            "text": "Email",
            "href": "mailto:rwbarrs@g.clemson.edu",
            "icon": <EmailIcon/>
        }
    ];

    return (
        <>
            <Row tw="lg:hidden justify-center items-center space-x-5 sm:space-x-7">
                {footerLinks.map((l) => {
                    return (
                        <a href={l.href} target={l.name !== 'about' ? "_blank" : undefined} rel={l.name === 'about' ? "noopener noreferrer" : undefined} >
                            <Row tw="w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden fill-white shadow-[2px 2px 2px black] duration-200 hover:-translate-y-1">
                                {l.icon}
                            </Row>
                        </a>
                    )
                })}
            </Row>
            <Row tw="hidden lg:flex justify-center items-center space-x-12">
                {footerLinks.map((l) => {
                    return l.name === 'about' ? (
                        <Link href="/about">
                            <Row tw="cursor-pointer fill-white w-fit text-white font-serif text-2xl drop-shadow-[2px 2px 2px black] duration-200 hover:-translate-y-1">
                                {l.text}
                            </Row>
                        </Link>
                    ) : (
                        <a href={l.href} target="_blank" rel="noopener noreferrer">
                            <Row tw="cursor-pointer fill-white w-fit text-white font-serif text-2xl drop-shadow-[2px 2px 2px black] duration-200 hover:-translate-y-1">
                                {l.text}
                            </Row>
                        </a>
                    )
                })}
            </Row>
        </>
    )
}

export default Footer;