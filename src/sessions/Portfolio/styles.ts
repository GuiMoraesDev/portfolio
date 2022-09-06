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

	flex-direction: column;

	padding: ${({ theme }) => theme.sizes.common['x1']};
	gap: ${({ theme }) => theme.sizes.common['x1.5']};
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
`;

export const ProjectLegend = styled.section`
	display: flex;

	flex-direction: column;

	width: 100%;

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

	transition: transform ${({ theme }) => theme.transition.normal};
	color: ${({ theme }) => theme.themeColors.text};

	svg {
		width: 100%;
		height: 100%;
	}

	:hover {
		transform: scale(1.1);
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
