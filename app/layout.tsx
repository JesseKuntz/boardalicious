import "./globals.css";
import { Roboto_Mono } from "next/font/google";

import { Providers, Menu } from "./components";

const robotoMono = Roboto_Mono({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Boardalicious",
  description:
    "Pull in your Board Game Geek collection to pick a random game to play!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} bg-gray-800 text-white text-lg`}
      >
        <Menu />
        <main className="px-4 md:px-12 py-12 ">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
