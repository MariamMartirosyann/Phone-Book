import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  palette: {
    primary: {
      main: "#cc9d25",
    },
    secondary: {
      main: "#0f0f0f",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "400px",
          color: "primary",
        },
      },
    },
  
   
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:"secondary",
          color:" primary"
        },
      },
    },
  },
});
/* components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "400px",
          color: "primary",
        },
      },
    },
  
   
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor:"secondary",
          color:" primary"
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#cc9d25",
    },
    secondary: {
      main: "#0f0f0f",
    },
  },*/