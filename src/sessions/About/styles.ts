import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;

	background-image: url("/img/pattern.svg");
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	gap: ${({ theme }) => theme.sizes.common['x1.5']};
`;
