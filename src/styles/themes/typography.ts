import { css } from "styled-components";

const typography = {
  fontFamily: {
    heading: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif",
  },
  variants: {
    display1: css`
      font-size: ${({ theme }) => theme.sizes.common.x7};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

line-height: 150%;
    `,
    heading1: css`
      font-size: ${({ theme }) => theme.sizes.common["x5"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: 150%;
    `,
    heading2: css`
      font-size: ${({ theme }) => theme.sizes.common["x4"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: 150%;
    `,
    heading3: css`
      font-size: ${({ theme }) => theme.sizes.common["x3.5"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: 150%;
    `,
    heading4: css`
      font-size: ${({ theme }) => theme.sizes.common.x3};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: 150%;
    `,
    heading5: css`
      font-size: ${({ theme }) => theme.sizes.common["x2.5"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: 150%;
    `,
    body1: css`
      font-size: ${({ theme }) => theme.sizes.common.x3};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: 120%;
    `,
    body2: css`
      font-size: ${({ theme }) => theme.sizes.common["x2.5"]};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: 120%;
    `,
    body3: css`
      font-size: ${({ theme }) => theme.sizes.common.x2};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: 120%;
    `,
    body4: css`
      font-size: ${({ theme }) => theme.sizes.common["x1.5"]};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: 120%;
    `,
  },
};

export default typography;
