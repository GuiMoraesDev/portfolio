import { PORTFOLIO_PROJECTS } from 'data';

const PROJECTS_QTD = 2;

export const formatProjectsArray = (
	spliceIndex = 0
) => {
	const copyOfPortfolioProjects = [...PORTFOLIO_PROJECTS];

	const projectsQtdToRender = copyOfPortfolioProjects.splice(
		spliceIndex,
		PROJECTS_QTD
	);

	return projectsQtdToRender;
};
