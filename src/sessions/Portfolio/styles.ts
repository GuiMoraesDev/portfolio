import styled from 'styled-components';

export const PortfolioContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;

	background-color: ${({ theme }) => theme.themeColors.canvasInvertedLight};
`;

export const ContentWrapper = styled.div`
	display: flex;

	flex-wrap: wrap;

	align-items: center;

	padding: ${({ theme }) => theme.sizes.common['x1']};
	gap: ${({ theme }) => theme.sizes.common['x2.5']};

	margin: auto;
`;

export const ProjectCard = styled.div`
	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;

	padding: ${({ theme }) => theme.sizes.common['x1']};

	background-color: ${({ theme }) => theme.themeColors.canvas};

	border: none;
	border-radius: ${({ theme }) => theme.rounded.sm};

	box-shadow: ${({ theme }) => `0px 2px 8px 0px ${theme.colors.neutrals[900]}`};

	@media screen and (${({ theme }) => theme.breakpoints.tablet}) {
		max-width: calc(50% - 0.5rem);

		flex: 1 1 50%;
	}
`;

export const ProjectLegend = styled.section`
	display: flex;

	flex-direction: column;

	width: 100%;
	height: 10rem;

	padding: ${({ theme }) => theme.sizes.common['x1.5']};

	gap: ${({ theme }) => theme.sizes.common['x2.5']};
`;

export const LinksWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: flex-end;

	width: 100%;

	background-color: ${({ theme }) => theme.themeColors.canvas};

	padding: ${({ theme }) => theme.sizes.common['x1.5']};

	gap: ${({ theme }) => theme.sizes.common['x4']};
`;

export const SocialLinks = styled.a`
	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: ${({ theme }) => theme.sizes.common.x7};
	height: ${({ theme }) => theme.sizes.common.x7};

	border: none;

	color: ${({ theme }) => theme.themeColors.text};
	transition: all ${({ theme }) => theme.transition.fast};

	svg {
		width: 100%;
		height: 100%;
	}
	
	.social-links-legend {
		opacity: 0;
	}

	:hover {
		transform: scale(1.2);

		.social-links-legend {
			opacity: 1;
		}
	}
`;

export const Button = styled.button`
	padding: ${({ theme }) => theme.sizes.dimensions.spacing.xs};

	width: ${({ theme }) => theme.sizes.dimensions.height.xl};

	border: none;
	border-radius: ${({ theme }) => theme.rounded.sm};

	margin: auto;

	color: ${({ theme }) => theme.themeColors.textInverted};
	background-color: ${({ theme }) => theme.themeColors.brandPrimary};

	transition: background-color ${({ theme }) => theme.transition.normal};

	:hover {
		background-color: ${({ theme }) => theme.themeColors.brandPrimaryDark};
	}

	:disabled {
		color: ${({ theme }) => theme.themeColors.text};
		background-color: ${({ theme }) => theme.colors.neutrals[300]};
	}
`;
