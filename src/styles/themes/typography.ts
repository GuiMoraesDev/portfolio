import { css } from "styled-components";

const typography = {
  fontFamily: {
    heading: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif",
  },
  variants: {
    display1: css`
      font-size: ${({ theme }) => theme.sizes.common.x12};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x20};
    `,
    heading1: css`
      font-size: ${({ theme }) => theme.sizes.common.x9};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x14};
    `,
    heading2: css`
      font-size: ${({ theme }) => theme.sizes.common.x6};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x10};
    `,
    heading3: css`
      font-size: ${({ theme }) => theme.sizes.common.x5};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x8};
    `,
    heading4: css`
      font-size: ${({ theme }) => theme.sizes.common.x4};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x6};
    `,
    heading5: css`
      font-size: ${({ theme }) => theme.sizes.common["x3.5"]};
      font-weight: 500;

      font-family: ${({ theme }) => theme.typography.fontFamily.heading};

      line-height: ${({ theme }) => theme.sizes.common.x5};
    `,
    body1: css`
      font-size: ${({ theme }) => theme.sizes.common.x4};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common.x6};
    `,
    body2: css`
      font-size: ${({ theme }) => theme.sizes.common["x3.5"]};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common.x5};
    `,
    body3: css`
      font-size: ${({ theme }) => theme.sizes.common.x3};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common.x4};
    `,
    body4: css`
      font-size: ${({ theme }) => theme.sizes.common["x2.5"]};
      font-weight: 400;

      font-family: ${({ theme }) => theme.typography.fontFamily.body};

      line-height: ${({ theme }) => theme.sizes.common.x3};
    `,
  },
};

export default typography;
