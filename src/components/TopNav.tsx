"use client";
import { useEffect, useState } from "react";
import FullScreenMenu from "./FullScreenMenu";
import Hamburger from "./Hamburger";
import CVPDF from "../../public/cv.pdf";

export default function TopNav() {
	const [fullScreenMenuIsOpen, setFullScreenMenuIsOpen] =
		useState<boolean>(false);

	const onClickHamburger = () => {
		fullScreenMenuIsOpen ? closeFullScreenMenu() : openFullScreenMenu();
	};

	const openFullScreenMenu = () => {
		setFullScreenMenuIsOpen(true);
		disableScroll();
	};

	const closeFullScreenMenu = () => {
		enableScroll();
		setFullScreenMenuIsOpen(false);
	};

	const disableScroll = () => {
		document.body.style.overflowY = "hidden";
		document.documentElement.style.overflowY = "hidden";
	};

	const enableScroll = () => {
		document.body.style.overflowY = "visible";
		document.documentElement.style.overflowY = "visible";
	};

	// First-render things
	useEffect(() => {
		// Handler to call on window resize
		const handleResize = () => {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		// Add event listener for resize
		window.addEventListener("resize", handleResize);

		// Call resize handler right away so state gets updated with initial window size
		handleResize();

		// Add listener to make esc key to close full-screen menu
		document.onkeydown = (event) => {
			if (event.key === "Escape") {
				closeFullScreenMenu();
			}
		};

		// Remove resize event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const links: {
		linkType: "external" | "local";
		text: string;
		href: string;
	}[] = [
		{
			linkType: "local",
			text: "Home",
			href: "/"
		},
		{
			linkType: "local",
			text: "About Me",
			href: "/about"
		},
		{
			linkType: "external",
			text: "Publications",
			href: "https://scholar.google.com/citations?user=-0jD4_wAAAAJ"
		},
		{
			linkType: "external",
			text: "Science Communications",
			href: "https://www.clippings.me/ryanbarrs"
		},
		{
		    linkType: 'external',
		    text: 'CV',
		    href: CVPDF
		},
		{
			linkType: "external",
			text: "LinkedIn",
			href: "https://www.linkedin.com/in/ryanbarrs"
		},
		{
			linkType: "external",
			text: "Email",
			href: "mailto:barrsr@icloud.com"
		}
	];

	return (
		<>
			<FullScreenMenu
				isOpen={fullScreenMenuIsOpen}
				links={links}
				onClickLink={closeFullScreenMenu}
			/>
			<div
				id="hamburgerContainer"
				className={hamburgerContainerStyling}
				onClick={onClickHamburger}
			>
				<Hamburger
					isOpen={fullScreenMenuIsOpen}
					onClick={onClickHamburger}
				/>
			</div>
		</>
	);
}

const hamburgerContainerStyling = `
	flex
	flex-col
	w-14
	h-14
	absolute
	cursor-pointer
	duration-75
	hover:scale-110
	left-4 md:left-10 lg:left-14
	top-4 md:top-10 lg:top-14
	z-20
	p-2
	rounded-md
`;
