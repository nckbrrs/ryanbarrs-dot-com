"use client";

export default function Home() {
	const containerStyling = `
		flex
		flex-col
		h-full
		justify-center
		lg:mt-24
		font-serif
		text-bone
	`;

	const nameTextStyling = `
		font-bold
      	leading-[7rem] lg:leading-[8rem] xl:leading-[10rem]
      	text-[7rem] lg:text-[10rem] xl:text-[12rem]
      	text-center
      	duration-100
      	[text-shadow:_2px_2px_5px_#212121]
	`;

	const descTextStyling = `
		mt-4 lg:mt-8
      	text-4xl lg:text-5xl
      	font-medium
      	text-center
      	leading-[3rem] lg:leading-[4rem]
	`;

	return (
		<div className={containerStyling}>
			<p className={nameTextStyling}>Ryan Barrs</p>
			<p className={descTextStyling}>
				is fixing broken hearts with bioengineering.
			</p>
		</div>
	);
}
