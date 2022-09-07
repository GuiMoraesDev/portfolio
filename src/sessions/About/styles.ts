import styled from 'styled-components';

export const AboutContainer = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;

	background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='42' height='42' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform='rotate(60)'%3E%3Crect width='100%25' height='100%25' fill='rgba(253, 253, 253,1)'/%3E%3Ccircle cx='20' cy='20' r='2' fill='rgba(226, 241, 245,1)' filter='url(%23filter-doodad-1)'/%3E%3Ccircle cx='25' cy='20' r='3' fill='rgba(240, 240, 240,1)'/%3E%3Ccircle cx='-15' cy='20' r='3' fill='rgba(240, 240, 240,1)'/%3E%3C/pattern%3E%3Cfilter id='filter-doodad-1'%3E%3CfeTurbulence baseFrequency='0' numOctaves='2' type='fractalNoise' result='result1'/%3E%3CfeDisplacementMap in2='result1' scale='0' result='result2' xChannelSelector='R' in='SourceGraphic'/%3E%3CfeComposite in2='result2' in='SourceGraphic' operator='atop' result='fbSourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ");
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: center;

	gap: ${({ theme }) => theme.sizes.common['x1.5']};
`;
