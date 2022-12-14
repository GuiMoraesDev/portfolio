import { useCallback } from 'react';

import Link from 'next/link';

import { Link as LinkIcon, GithubLogo } from 'phosphor-react';

import Img from 'components/Img';
import Text from 'components/Text';

import { Props } from 'pages';

import * as PatternStyles from 'styles/global/patterns';

import { formatProjectsArray } from './helpers/formatProjectsArray';
import * as Styles from './styles';

const Portfolio = ({ portfolioData }: Props): JSX.Element => {
	const projects = formatProjectsArray(portfolioData, 0, 4);

	const hasMoreProjectsToLoad = projects.length < portfolioData.length;

	const handleLoadMoreProjects = useCallback(() => {
		if (!hasMoreProjectsToLoad) {
			return;
		}

		const lastIndex = projects.length;

		const formattedProjects = formatProjectsArray(portfolioData, lastIndex);

		projects.push(...formattedProjects);
	}, [hasMoreProjectsToLoad, portfolioData, projects]);

	return (
		<Styles.PortfolioContainer>
			<PatternStyles.Content>
				<Text label="My best projects" dimension="heading2" variant="white" />

				<Styles.ContentWrapper>
					{projects.map((project) => (
						<Styles.ProjectCard key={`project_${project.id}`}>
							<Styles.ProjectCover>
								<Img
									src={`https://raw.githubusercontent.com/GuimoraesDev/${project.title}/main/public/img/cover.png`}
									alt={project.title}
									width={320}
									height={168}
								/>
							</Styles.ProjectCover>

							<Styles.ProjectLegend>
								<Text
									label={project.title}
									dimension="body1"
									isBold
									isCapitalize
								/>

								<Text label={project.description} />
							</Styles.ProjectLegend>

							<Styles.LinksWrapper>
								<Link href={project.project_link} passHref>
									<Styles.SocialLinks target="_blank" rel="noopener noreferrer">
										<LinkIcon />
										<Text
											label="Project"
											dimension="body3"
											className="social-links-legend"
										/>
									</Styles.SocialLinks>
								</Link>

								<Link href={project.github_link} passHref>
									<Styles.SocialLinks target="_blank" rel="noopener noreferrer">
										<GithubLogo />
										<Text
											label="Github"
											dimension="body3"
											className="social-links-legend"
										/>
									</Styles.SocialLinks>
								</Link>
							</Styles.LinksWrapper>
						</Styles.ProjectCard>
					))}
				</Styles.ContentWrapper>

				{hasMoreProjectsToLoad && (
					<Styles.Button
						onClick={handleLoadMoreProjects}
						disabled={!hasMoreProjectsToLoad}
					>
						Load more
					</Styles.Button>
				)}
			</PatternStyles.Content>
		</Styles.PortfolioContainer>
	);
};

export default Portfolio;
