import styled from 'styled-components';

interface Props {
	isHero?: boolean;
}

export const Content = styled.div<Props>`
	display: flex;
	flex-direction: column;

	justify-content: space-between;

	width: 100%;
	max-width: 600px;
	height: 100%;
	min-height: ${({ isHero }) => isHero && '100vh'};

	margin: auto;
	gap: ${({ theme }) => theme.sizes.common.x4};
	padding: ${({ theme }) => theme.sizes.common.x6};

	@media screen and (${({ theme }) => theme.breakpoints.tablet}) {
		max-width: 1000px;
		min-height: ${({ isHero }) => isHero && '70vh'};

		padding: ${({ theme }) => theme.sizes.common.x8};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptop}) {
		padding: ${({ theme }) => theme.sizes.common.x10};
	}

	@media screen and (${({ theme }) => theme.breakpoints.laptopL}) {
		max-width: 1200px;

		padding: ${({ theme }) => theme.sizes.common.x12};
	}
`;
