const commonTheme = {
  fonts: {
    main: 'Roboto, sans-serif',
    header: 'Ubuntu, sans-serif',
  },
  fontSizes: {
    xs: '14px',
    s: '16px',
    m: '18px',
    l: '20px',
    xl: '24px',
    xxl: '30px',
  },
  space: [0, 4, 8, 16, 32, 64],
  fontWeights: {
    regular: 400,
    madium: 500,
    bold: 700,
  },
  shadows: {
    bottom: '2px 3px 1px rgba(0, 0, 0, 0.2)',
    main: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,
  },

  borders: {
    none: 'none',
    normal: '1px solid #3d3df367',
    active: '1px solid #6d6dfb',
  },

  radii: {
    none: 0,
    normal: '16px',
    big: '20px',
    large: '30px',
    round: '50%',
  },

  transitions: {
    color: "color 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    background: "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    common: "color 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: "opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    all: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const darkTheme = {
    colors: {
    background: "#001e3c",
    main: '#012a53',
    mainText: '#b2bac2',
    mainTextActive: '#ffffff',
    text: '#b2bac2',
    textActive: '#ffffff',
    primary: '#001e3c',
    secondary: '#012a53',
    outline: '#6d6dfb',
  },
  ...commonTheme,
};
export const lightTheme = {
    colors: {
    background: "#ffffff",
    main: '#373e67',
    mainText: '#ffffff',
    mainTextActive: '#b2bac2',
    text: '#012a53',
    textActive: '#003b75',
    primary: '#fefefe',
    secondary: '#d7ecffbc',
    outline: '#4470ff',
  },
  ...commonTheme,
};
