import styled, { DefaultTheme } from 'styled-components';

import { TextDefaultPropsThatMakeStyles, VariantProps } from '.';

interface TextProps extends TextDefaultPropsThatMakeStyles {
	tag?: string;
}

const textVariant = (theme: DefaultTheme): Record<VariantProps, string> => ({
	regular: theme.themeColors.text,
	light: theme.themeColors.textLight,
	inverted: theme.themeColors.textInverted,
	black: theme.colors.neutrals[900],
	white: theme.colors.neutrals['050'],
});

export const Text = styled.p.attrs<TextProps>(({ tag }) => ({
	as: tag,
}))<TextProps>`
	position: relative;

	padding: 0;
	margin: 0;

	width: ${({ fullWidth }) => fullWidth && '100%'};

	${({ theme, dimension }) => theme.typography.variants[dimension || 'body2']};

	font-weight: ${({ isBold }) => isBold && 'bold'};

	color: ${({ variant, theme }) => textVariant(theme)[variant || 'regular']};

	text-transform: ${({ isCapitalize }) =>
		isCapitalize ? 'capitalize' : 'none'};

	box-sizing: border-box;
`;
