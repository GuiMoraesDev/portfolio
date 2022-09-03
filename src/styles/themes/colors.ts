const colors = {
  transparent: "transparent",
  neutrals: {
    "000": "#FDFDFD",
    "050": "#F2F2F1",
    "100": "#E4E5E3",
    "150": "#D7D7D6",
    "200": "#C9CAC8",
    "300": "#AFB0AC",
    "400": "#949591",
    "500": "#797B75",
    "600": "#61625E",
    "700": "#494A46",
    "800": "#30312F",
    "850": "#242523",
    "900": "#181917",
    "950": "#0C0C0C",
    "999": "#060606",
  },
  primary: {
    "050": "#E2F1F5",
    "100": "#CDE6EC",
    "150": "#B7DBE4",
    "200": "#A2D0DC",
    "300": "#78BBCB",
    "400": "#4DA5BB",
    "500": "#238FAA",
    "600": "#1C7288",
    "700": "#155666",
    "800": "#0E3944",
    "850": "#0B2B33",
    "900": "#071D22",
    "950": "#040E11",
  },
  success: {
    "100": "#D7E2D9",
    "300": "#94AF99",
    "500": "#507C59",
  },
  alert: {
    "100": "#FFF6E0",
    "300": "#FFE3A3",
    "500": "#FFD166",
  },
  danger: {
    "100": "#F9DCD4",
    "300": "#EE977D",
    "500": "#E35226",
  },
  info: {
    "100": "#B8CDE0",
    "300": "#6D92B5",
    "500": "#235789",
  },
};

const themeColors = {
  canvas: colors.neutrals["000"],
  canvasDark: colors.neutrals["100"],
  canvasInverted: colors.neutrals["900"],
  canvasInvertedLight: colors.neutrals["800"],

  textLight: colors.neutrals["500"],
  text: colors.neutrals["900"],
  textInverted: colors.neutrals["000"],

  border: colors.neutrals["200"],
  borderInverted: colors.neutrals["500"],

  brandPrimaryLight: colors.primary["400"],
  brandPrimary: colors.primary["500"],
  brandPrimaryDark: colors.primary["600"],
};

export { colors, themeColors };
