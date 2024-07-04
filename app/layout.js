import "./globals.css";
import localFont from '@next/font/local'

const cygroteskkey = localFont({
  src: [
    {
      path: '../public/fonts/cy-grotesk-key-regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/cy-grotesk-key-bold.ttf',
      weight: '700'
    },
  ],
  variable: '--font-cygroteskkey'
})


export const metadata = {
  title: "Sociowell",
  description: "The Go-To Agency for Health and Wellness Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cygroteskkey.className}>{children}</body>
    </html>
  );
}