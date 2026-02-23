import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A0B4C8",
      contrastText: "#2C3E50",
    },
    secondary: {
      main: "#F2D5D9",
      contrastText: "#2C3E50",
    },
    background: {
      default: "#F9F6EF",
      paper: "rgba(255, 255, 255, 0.6)",
    },
    text: {
      primary: "#2C3E50",
      secondary: "#5A6C7E",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 12,
          padding: "10px 28px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
