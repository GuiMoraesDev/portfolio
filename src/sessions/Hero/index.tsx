import Img from 'next/image';
import Link from 'next/link';

import { GithubLogo, LinkedinLogo } from 'phosphor-react';

import Text from 'components/Text';

import * as Styles from './styles';

const Hero = (): JSX.Element => {
	return (
		<Styles.HeroContainer>
			<Styles.ContentWrapper isHero>
				<Styles.PresentationWrapper>
					<Text label="Hi, I'm" dimension="heading1" variant="white" isBold />
					<Text label="Guilherme" dimension="heading1" variant="white" isBold />
					<Text
						label="Front-end engineer"
						dimension="heading2"
						variant="white"
					/>
				</Styles.PresentationWrapper>

				<Styles.AvatarCard>
					<Img
						src="/assets/avatar.webp"
						alt="A drawing that represents me wearing a gray jacket and a medium-long brown beard"
						width={180}
						height={180}
					/>
					<Styles.SocialLinksWrapper>
						<Link href="https://github.com/GuiMoraesDev" passHref>
							<Styles.SocialLinks target="_blank" rel="noopener noreferrer">
								<GithubLogo />
								<Text label="Github" variant="white" />
							</Styles.SocialLinks>
						</Link>

						<Link
							href="https://www.linkedin.com/in/guimoraesdev/?locale=en_US"
							passHref
						>
							<Styles.SocialLinks target="_blank" rel="noopener noreferrer">
								<LinkedinLogo />
								<Text label="LinkedIn" variant="white" />
							</Styles.SocialLinks>
						</Link>
					</Styles.SocialLinksWrapper>
				</Styles.AvatarCard>

				<Styles.MainTechsWrapper>
					<Text label="Main techs" dimension="heading2" variant="white" />

					<Styles.TechsWrapper>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
							alt="React logo"
							width={44}
							height={44}
						/>

						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
							alt="Typescript logo"
							width={44}
							height={44}
						/>

						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
							alt="Jest logo"
							width={44}
							height={44}
						/>

						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							alt="Javascript logo"
							width={44}
							height={44}
						/>

						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
							alt="Next.js logo"
							width={44}
							height={44}
						/>
					</Styles.TechsWrapper>
				</Styles.MainTechsWrapper>
			</Styles.ContentWrapper>
		</Styles.HeroContainer>
	);
};

export default Hero;
