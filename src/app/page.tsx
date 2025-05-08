import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/invoices">
      <Typography variant="h1">Invoices</Typography>
    </Link>
  );
}
