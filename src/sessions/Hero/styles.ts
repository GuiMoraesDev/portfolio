import styled from 'styled-components';

export const HeroContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: 100%;
	min-height: 100vh;

	justify-content: space-between;

	background-image: url('./img/Background.png');
	background-size: cover;

	padding: ${({ theme }) => theme.sizes.common.x10};

	@media only screen and (min-device-pixel-ratio: 2),
		only screen and (min-resolution: 192dpi),
		only screen and (min-resolution: 2dppx) {
		background-image: url('./img/Background@2x.png');
	}

	@media screen and (${({ theme }) => theme.breakpoints.tablet}) {
		background-image: url('./img/BackgroundTablet.png');

		@media only screen and (min-device-pixel-ratio: 2),
			only screen and (min-resolution: 192dpi),
			only screen and (min-resolution: 2dppx) {
			background-image: url('./img/BackgroundTablet@2x.png');
		}
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptop}) {
		display: grid;

		grid-template-columns: 1fr 3fr;
		grid-template-rows: 3fr 1fr;

		grid-template-areas:
			'Presentation AvatarCard'
			'Techs AvatarCard';

		padding: ${({ theme }) =>
			`${theme.sizes.common.x20} ${theme.sizes.common.x16}`};

		background-image: url('./img/BackgroundLaptop.png');

		@media only screen and (min-device-pixel-ratio: 2),
			only screen and (min-resolution: 192dpi),
			only screen and (min-resolution: 2dppx) {
			background-image: url('./img/BackgroundLaptop@2x.png');
		}
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
	max-width: 50rem;
	height: 100%;

	padding: ${({ theme }) =>
		`${theme.sizes.common.x10} ${theme.sizes.common.x8}`};

	gap: ${({ theme }) => theme.sizes.common.x20};

	border: 16px solid ${({ theme }) => theme.themeColors.brandPrimary};

	margin: ${({ theme }) => theme.sizes.common.x10} auto;

	@media screen and (${({ theme }) => theme.breakpoints.tablet}) {
		padding: ${({ theme }) =>
			`${theme.sizes.common.x24} ${theme.sizes.common.x8}`};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptop}) {
		flex-direction: row;

		justify-content: space-around;

		max-width: 70rem;
		max-height: 70rem;

		margin: auto;

		gap: ${({ theme }) => theme.sizes.common.x10};
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

export const SocialLinks = styled.button`
	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: ${({ theme }) => theme.sizes.common.x16};
	height: ${({ theme }) => theme.sizes.common.x16};

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
	max-width: ${({ theme }) => theme.sizes.common.x96};
`;
