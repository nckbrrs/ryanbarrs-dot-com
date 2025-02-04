import "~/styles/globals.css";
import { Viewport, type Metadata } from "next";
import TopNav from "~/components/TopNav";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Config } from "tailwindcss";
import localFont from "next/font/local";

const twFullConfig = resolveConfig(
	tailwindConfig as Config & typeof tailwindConfig
);

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NODE_ENV == "development"
			? "http://localhost:3000"
			: "https://ryanbarrs.com"
	),
	title: "Ryan Barrs",
	description: "Bioengineering PhD in Charleson, SC",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
	openGraph: {
		title: "Ryan Barrs",
		description: "Bioengineering PhD in Charleson, SC",
		siteName: "Ryan Barrs",
		type: "website",
		images: [
			{
				url: "/open-graph-img.png",
				width: 1200,
				height: 630,
				alt: "Preview image for ryanbarrs.com"
			}
		]
	}
};

export const viewport: Viewport = {
	themeColor: "#55657F"
};

const canelaDeck = localFont({
	src: [
		{
			path: "../../public/fonts/CanelaDeck.otf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../../public/fonts/CanelaDeck-Bold.otf",
			weight: "700",
			style: "bold"
		}
	],
	variable: "--font-canelaDeck"
});

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={bodyContainerStyling}>
				<TopNav />
				{children}
			</body>
		</html>
	);
}

const bodyContainerStyling = `
	${canelaDeck.variable}
	antialiased
	flex
	flex-col
	h-screen
	w-full
	items-center
`;
