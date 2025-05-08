import CustomThemeProvider from "@/providers/custom-theme-provider/CustomThemeProvider";
import { JSX, PropsWithChildren } from "react";

export default function Providers({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <CustomThemeProvider options={{ key: "mui", prepend: true }}>
      {children}
    </CustomThemeProvider>
  );
}
