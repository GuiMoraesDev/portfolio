import { themeColors } from "./colors";
import sizes from "./sizes";

const borders = {
  none: "none",
  solid: `${sizes.common.xpx} solid ${themeColors.border}`,
  dashed: `${sizes.common.xpx} dashed ${themeColors.border}`,
  dotted: `${sizes.common.xpx} dotted ${themeColors.border}`,
  solidDarker: `${sizes.common.xpx} solid ${themeColors.borderInverted}`,
  dashedDarker: `${sizes.common.xpx} dashed ${themeColors.borderInverted}`,
  dottedDarker: `${sizes.common.xpx} dotted ${themeColors.borderInverted}`,
};

export default borders;
