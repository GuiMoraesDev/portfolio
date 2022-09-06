import { PortfolioProps } from 'pages';

export const formatProjectsArray = (
	projects: PortfolioProps[],
	spliceIndex = 0,
	qtdToLoad = 2
) => {
	const copyOfPortfolioProjects = [...projects];

	const projectsQtdToRender = copyOfPortfolioProjects.splice(
		spliceIndex,
		qtdToLoad
	);

	return projectsQtdToRender;
};
