"use client";

import { overrideComponents } from "@/providers/custom-theme-provider/override-components";
import { palette } from "@/providers/custom-theme-provider/palette";
import { typography } from "@/providers/custom-theme-provider/typography";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  typography,
  palette: {
    ...palette,
  },
  components: overrideComponents,
});
