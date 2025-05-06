import { SECONDARY } from "@/providers/custom-theme-provider/constants/palette";
import { theme } from "@/providers/custom-theme-provider/useDefaultTheme";
import { getGlobalStyles } from "@/providers/custom-theme-provider/utils/getGlobalStyles";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  options: {
    key: string;
    prepend: boolean;
  };
}

export default function customThemeProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={getGlobalStyles(SECONDARY.main)} />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
