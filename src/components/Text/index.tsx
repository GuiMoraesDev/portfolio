import React, { HTMLAttributes } from 'react';

import { DefaultTheme } from 'styled-components';

import * as Styles from './styles';

export type VariantProps = 'regular' | 'light' | 'inverted' | "black" | 'white';

export interface TextDefaultPropsThatMakeStyles {
	fullWidth?: boolean;
	dimension?: keyof DefaultTheme['typography']['variants'];
	variant?: VariantProps;
	isBold?: boolean;
	isCapitalize?: boolean;
}

type TagProps = Record<keyof DefaultTheme['typography']['variants'], string>;

interface TextDefaultProps extends TextDefaultPropsThatMakeStyles {
	label: string;
}

type TextProps = TextDefaultProps & HTMLAttributes<HTMLElement>;

const Text = ({
	label,
	variant = 'regular',
	fullWidth = false,
	dimension = 'body2',
	...props
}: TextProps): JSX.Element => {
	const TagsOptions: TagProps = {
		display1: 'strong',
		heading1: 'h1',
		heading2: 'h2',
		heading3: 'h3',
		heading4: 'h4',
		heading5: 'h5',
		body1: 'p',
		body2: 'p',
		body3: 'p',
		body4: 'p',
	};

	const Tag = TagsOptions[dimension];

	return (
		<Styles.Text
			tag={Tag}
			fullWidth={fullWidth}
			dimension={dimension}
			variant={variant}
			{...props}
		>
			{label}
		</Styles.Text>
	);
};

export default Text;
