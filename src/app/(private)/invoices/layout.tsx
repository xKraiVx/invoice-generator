import PrivateLayout from "@/layouts/private-layout/PrivateLayout";
import { JSX, PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return <PrivateLayout>{children}</PrivateLayout>;
}
