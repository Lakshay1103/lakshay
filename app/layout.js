import { League_Spartan } from "next/font/google";
import "./globals.css";

const league = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Sociowell",
  description: "The Go-To Agency for Health and Wellness Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league.className}>{children}</body>
    </html>
  );
}