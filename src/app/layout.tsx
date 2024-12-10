import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const instrumentSansBold = localFont({
  src: "./fonts/InstrumentSans-Bold.ttf",
  variable: "--instrument-sans-bold",
  weight: "700",
});
const instrumentSansSemiBold = localFont({
  src: "./fonts/InstrumentSans-SemiBold.ttf",
  variable: "--instrument-sans-semibold",
  weight: "600",
});
const instrumentSansRegular = localFont({
  src: "./fonts/InstrumentSans-Regular.ttf",
  variable: "--instrument-sans-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Devlinks",
  description: "A Link sharing platform for developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${instrumentSansBold.variable} ${instrumentSansSemiBold.variable} ${instrumentSansRegular.variable} antialiased flex flex-col h-screen`}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
