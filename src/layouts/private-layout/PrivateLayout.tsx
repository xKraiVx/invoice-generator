import PrivateLayoutHeader from "@/layouts/private-layout/components/private-layout-header/PrivateLayoutHeader";
import { Container } from "@mui/material";
import { JSX, PropsWithChildren } from "react";

export default function PrivateLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <Container>
      <PrivateLayoutHeader />
      {children}
    </Container>
  );
}
