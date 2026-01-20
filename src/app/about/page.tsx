export default function About() {
	const containerStyling = `
		flex
		flex-col
		w-full max-w-[1200px]
		px-8 md:px-16 lg:px-24
		justify-start
		items-center
		py-20 md:pt-28
		space-y-8
	`;

	const headshotImgStyling = `
		border-2
		rounded-full
		shadow-md
		shadow-black
		max-h-96
	`;

	const pStyling = `
		font-serif
		text-bone
		tracking-normal
		text-2xl lg:text-3xl
		drop-shadow-lg
	`;

	return (
		<div className={containerStyling}>
			<img src={"headshot.png"} className={headshotImgStyling} />
			<p className={pStyling}>
				I obtained my PhD in Bioengineering from Clemson University in
				2023.
				<br />
				<br />
				For my doctoral research, I was based in Charleston, SC at the
				Medical University of South Carolina through a joint program
				with Clemson. This experience immersed me in a research hospital
				environment and influenced my passion for applying engineering
				principles to translational medicine.
				<br />
				<br />
				I have authored nine peer-reviewed publications, mentored five
				undergraduate students, and was awarded the prestigious Ruth L.
				Kirschstein F31 predoctoral fellowship from the National Heart,
				Lung, and Blood Institute (NHLBI) to support my doctoral
				research in cardiovascular tissue engineering.
				<br />
				<br />
				Outside of the lab, I am active in science communication and
				enjoy cooking, roasting coffee, discovering new music, and
				playing the ancient Irish sport of hurling with the Charleston
				Hurling Club.
			</p>
		</div>
	);
}
