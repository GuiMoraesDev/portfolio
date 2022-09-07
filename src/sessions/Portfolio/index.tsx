import { useCallback, useState } from 'react';

import Link from 'next/link';

import { Link as LinkIcon, GithubLogo } from 'phosphor-react';

import Text from 'components/Text';

import { Props } from 'pages';

import * as PatternStyles from 'styles/global/patterns';

import { formatProjectsArray } from './helpers/formatProjectsArray';
import * as Styles from './styles';

const Portfolio = ({ portfolioData }: Props): JSX.Element => {
	const [projects, setProjects] = useState(() =>
		formatProjectsArray(portfolioData, 0, 4)
	);

	const hasMoreProjectsToLoad = projects.length < portfolioData.length;

	const handleLoadMoreProjects = useCallback(() => {
		if (!hasMoreProjectsToLoad) {
			return;
		}

		setProjects((state) => {
			const lastIndex = state.length;

			const formattedProjects = formatProjectsArray(portfolioData, lastIndex);

			return [...state, ...formattedProjects];
		});
	}, [hasMoreProjectsToLoad, portfolioData]);

	return (
		<Styles.PortfolioContainer>
			<PatternStyles.Content>
				<Text label="My best projects" dimension="heading2" variant="white" />

				<Styles.ContentWrapper>
					{projects.map((project) => (
						<Styles.ProjectCard key={`project_${project.id}`}>
							<Styles.ProjectLegend>
								<Text label={project.title} dimension="body1" isBold isCapitalize />

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
