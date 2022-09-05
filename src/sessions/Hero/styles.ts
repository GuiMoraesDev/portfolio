import styled from 'styled-components';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	min-height: 100vh;

	justify-content: space-between;

	background-color: ${({ theme }) => theme.colors.neutrals[800]};

	padding: ${({ theme }) => theme.sizes.common.x5};

	@media screen and (${({ theme }) => theme.breakpoints.tablet}) {
		padding: ${({ theme }) => theme.sizes.common.x8};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptop}) {
		display: grid;

		grid-template-columns: 35% 65%;
		grid-template-rows: 3fr 1fr;

		grid-template-areas:
			'Presentation AvatarCard'
			'Techs AvatarCard';

		padding: ${({ theme }) => theme.sizes.common.x14};
		gap: ${({ theme }) => theme.sizes.common.x6};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptopL}) {
		padding: ${({ theme }) => theme.sizes.common.x16};
	}
`;

export const PresentationWrapper = styled.div`
	grid-area: Presentation;

	display: flex;
	flex-direction: column;

	justify-content: center;
`;

export const AvatarCard = styled.div`
	grid-area: AvatarCard;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;

	padding: ${({ theme }) => theme.sizes.common.x6};

	gap: ${({ theme }) => theme.sizes.common.x7};

	border: 16px solid ${({ theme }) => theme.themeColors.brandPrimary};

	margin: ${({ theme }) => theme.sizes.common.x6} auto;

	@media screen and (${({ theme }) => theme.breakpoints.tablet}) {
		padding: ${({ theme }) => theme.sizes.common.x8};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptop}) {
		flex-direction: row;

		justify-content: space-around;

		width: 70%;
		height: 80%;

		margin: auto;

		gap: ${({ theme }) => theme.sizes.common.x8};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptopL}) {
		width: 64%;
		height: 72%;
	}
`;

export const SocialLinksWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-around;

	width: 100%;

	@media screen and (${({ theme }) => theme.breakpoints.laptop}) {
		flex-direction: column;

		width: auto;
		height: 100%;
	}
`;

export const SocialLinks = styled.a`
	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: ${({ theme }) => theme.sizes.common.x8};
	height: ${({ theme }) => theme.sizes.common.x8};

	border: none;

	transition: transform ${({ theme }) => theme.transition.normal};
	color: ${({ theme }) => theme.colors.neutrals['050']};

	svg {
		width: 100%;
		height: 100%;
	}

	:hover {
		transform: scale(1.1);
	}
`;

export const MainTechsWrapper = styled.div`
	grid-area: Techs;

	width: 100%;
`;

export const TechsWrapper = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-between;

	width: 100%;
	max-width: ${({ theme }) => theme.sizes.common.x44};
`;
