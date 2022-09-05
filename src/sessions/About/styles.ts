import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;

	background-color: ${({ theme }) => theme.colors.neutrals['050']};
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	gap: ${({ theme }) => theme.sizes.common['x1.5']};
`;
