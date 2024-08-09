import { MuiLink, MuiButton } from "./MuiComponentDefaults";
import { palette } from "./theme/palette";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette,
  components: {
    MuiLink,
    MuiButton,
  },
});

export default theme;
