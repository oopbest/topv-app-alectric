import type { Metadata } from "next";
// import localFont from "next/font/local";
import "/styles/globals.css";
import "/styles/custom.css";
import { ThemeProvider } from "@/components/theme-provider";

// ** Fix Font Awesome icons appear large initially and then resize to the correct size **
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
config.autoAddCss = false;
// ** ----- **

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Alectric",
  description: "Alectric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className="font-sukhumvit">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
