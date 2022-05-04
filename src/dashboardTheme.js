import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
            width: "400px",
            // height: "20px",
            // padding: "7px",
            // border: "1px solid goldenrod",
            // color: "goldenrod",
            // margin: "20px",
            // textAlign: "start"
        },
      },
    },
  },
});
