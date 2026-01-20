import { motion } from "framer-motion";
import Link from "next/link";

type FullScreenMenuProps = {
	isOpen: boolean;
	links: { linkType: "external" | "local"; text: string; href: string }[];
	onClickLink: () => void;
};

export default function FullScreenMenu({
	isOpen,
	links,
	onClickLink
}: FullScreenMenuProps) {
	return isOpen ? (
		<motion.div
			className={fullScreenMenuContainerStyling}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className={menuLinksColStyling}>
				{links.map((l) => (
					<Link
						key={l.text}
						href={`${l.href}`}
						target={l.linkType === "external" ? "_blank" : ""}
						rel={
							l.linkType === "external"
								? "noopener noreferrer"
								: ""
						}
						onClick={onClickLink}
					>
						<p className={linkTextStyling}>{l.text}</p>
					</Link>
				))}
			</div>
		</motion.div>
	) : null;
}

const fullScreenMenuContainerStyling = `
    flex
	flex-row 
    w-full
    h-full
    space-y-2
	backdrop-blur-3xl
    left-0 
    top-0 
    justify-center 
    items-center
    fixed
    z-20
`;

const menuLinksColStyling = `
    flex
    flex-col
    flex-wrap
    group
    items-start
    justify-center
    space-y-4
    translate-y-2 
	px-6
`;

const linkTextStyling = `
	w-full
	px-2
    text-4xl md:text-5xl lg:text-6xl
    font-bold
	font-serif
	text-bone
	text-left
    duration-200
    group-hover:opacity-25
    group-hover:blur-[2px]
    hover:!opacity-100
    hover:!blur-0
	hover:translate-x-3
	[text-shadow:_2px_2px_3px_#212121]
`;
