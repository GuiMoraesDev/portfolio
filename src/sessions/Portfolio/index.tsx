import { useCallback, useState } from 'react';

import Link from 'next/link';

import { PORTFOLIO_PROJECTS } from 'data';
import {
	Link as LinkIcon,
	GithubLogo,
	CaretUp,
	CaretDown,
} from 'phosphor-react';

import Text from 'components/Text';

import * as PatternStyles from 'styles/global/patterns';

import { formatProjectsArray } from './helpers/formatProjectsArray';
import * as Styles from './styles';

const Portfolio = (): JSX.Element => {
	const [projects, setProjects] = useState(formatProjectsArray);

	const hasMoreProjectsToLoad = projects.length < PORTFOLIO_PROJECTS.length;

	const handleLoadMoreProjects = useCallback(() => {
		if (!hasMoreProjectsToLoad) {
			return;
		}

		setProjects((state) => {
			const lastIndex = state.length;

			const formattedProjects = formatProjectsArray(lastIndex);

			return [...state, ...formattedProjects];
		});
	}, [hasMoreProjectsToLoad]);

	return (
		<Styles.PortfolioContainer>
			<PatternStyles.Content>
				<Text label="My best projects" dimension="heading2" variant="white" />

				<Styles.ContentWrapper>
					{projects.map((project) => (
						<Styles.ProjectCard key={`project_${project.id}`}>
							<Styles.ProjectLegend>
								<Text label={project.legend.title} dimension="body1" isBold />

								<Text label={project.legend.description} />
							</Styles.ProjectLegend>

							<Styles.LinksWrapper>
								<Link href={project.links.project} passHref>
									<Styles.SocialLinks target="_blank" rel="noopener noreferrer">
										<LinkIcon />
										<Text label="Project" />
									</Styles.SocialLinks>
								</Link>

								<Link href={project.links.github} passHref>
									<Styles.SocialLinks target="_blank" rel="noopener noreferrer">
										<GithubLogo />
										<Text label="Github" />
									</Styles.SocialLinks>
								</Link>
							</Styles.LinksWrapper>
						</Styles.ProjectCard>
					))}

					<Styles.Button
						onClick={handleLoadMoreProjects}
						disabled={!hasMoreProjectsToLoad}
					>
						Load more
					</Styles.Button>
				</Styles.ContentWrapper>
			</PatternStyles.Content>
		</Styles.PortfolioContainer>
	);
};

export default Portfolio;
