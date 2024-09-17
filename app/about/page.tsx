const About = () => {
    return (
        <Container>
            <SubContainer>
                <HeadshotRow>
                    <HeadshotBox>
                        <Headshot src="headshot.png"/>
                    </HeadshotBox>
                </HeadshotRow>
                <AboutCol>
                    <AboutText>
                        I obtained my PhD in Bioengineering from Clemson University in 2023.<br/><br/>
                        For my doctoral research, I was based in Charleston, SC at the Medical University of South Carolina through a joint program with Clemson. This experience immersed me in a research hospital environment and influenced my passion for applying engineering principles to translational medicine.<br/><br/>
                        I have authored nine peer-reviewed publications, mentored five undergraduate students, and was awarded the prestigious Ruth L. Kirschstein F31 predoctoral fellowship from the National Heart, Lung, and Blood Institute (NHLBI) to support my doctoral research in cardiovascular tissue engineering.<br/><br/>
                        Outside of the lab, I am active in science communication and enjoy cooking, roasting coffee, discovering new music, and playing the ancient Irish sport of hurling with the Charleston Hurling Club.
                    </AboutText>
                </AboutCol>
            </SubContainer>
        </Container>
    )
}

export default About;

const Container = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-col
            h-full
            justify-center
            items-center
        `}
    >
        {props.children}
    </div>
)

const SubContainer = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-col
            w-full xl:w-4/5
            h-fit
            my-8
            max-w-[1300px]
            px-2 md:px-8
        `}
    >
        {props.children}
    </div>
)

const HeadshotRow = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-row
            h-full
            justify-center
            items-center
        `}
    >
        {props.children}
    </div>
)

const HeadshotBox = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-row
            aspect-square
        `}
    >
        {props.children}
    </div>
)

const Headshot = (props: {src: string}) => (
    <img
        src={props.src}
        className={`
            border-2
            rounded-full
            shadow-md
            shadow-black
            max-h-96
        `}
    />
)

const AboutCol = (props: {children: React.ReactNode}) => (
    <div
        className={`
            flex
            flex-col
            justify-center
            py-12
        `}
    >
        {props.children}
    </div>
)

const AboutText = (props: {children: React.ReactNode}) => (
    <p
        className={`
            font-serif
            text-white
            tracking-wide
            text-2xl md:text-2xl
            drop-shadow-[1px 1px 1px black]
        `}
    >
        {props.children}
    </p>
)