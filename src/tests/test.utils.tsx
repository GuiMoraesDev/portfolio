import React, { PropsWithChildren, ReactElement } from 'react';

import 'jest-styled-components';

import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/themes';

import '@testing-library/jest-dom';

const AllTheProviders = ({ children }: PropsWithChildren<{}>) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) =>
	render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
