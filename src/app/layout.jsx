import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pravi pratioci, pravi rezultati | Sportolog Giveaway",
  description: "Prijavi se na Sportolog giveaway i osvoji sportske nagrade. Jednostavno prati, taguj prijatelje i učestvuj.",
  icons: {
    icon: "/sportolog.png",
  },
  openGraph: {
    title: "Sportolog Giveaway",
    description: "Prijavi se na Sportolog giveaway i osvoji sportske nagrade.",
    images: ["/sportolog.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
