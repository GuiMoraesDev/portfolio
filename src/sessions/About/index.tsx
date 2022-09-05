import Text from 'components/Text';

import * as PatternStyles from 'styles/global/patterns';

import * as Styles from './styles';

const About = (): JSX.Element => {
	return (
		<Styles.AboutContainer>
			<PatternStyles.Content>
				<Text label="About me" dimension="heading2" />

				<Styles.ContentWrapper>
					<Text label="I’m a software developer with experience working on a variety of projects." />
					<Text label="Specialist in front-end development with Javascript, Typescript, React, CSS-in-JS, and other related technologies." />
					<Text label="I had experience working in small and medium-sized companies building complex front-end solutions focused on User Experience (UX)." />
					<Text label="Skilled at communicating with the diverse parties involved in the development process to efficiently solve problems, passionate about his work and adapts quickly to new technologies, constantly looking to improve and learn." />
					<Text label="My experience allows me to get involved in the full development process from planning to deployment." />
					<Text label="Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team." />
				</Styles.ContentWrapper>
			</PatternStyles.Content>
		</Styles.AboutContainer>
	);
};

export default About;
