import type { Metadata } from "next";
// import localFont from "next/font/local";
import "/styles/globals.css";
import "/styles/custom.css";
import { ThemeProvider } from "@/components/theme-provider";

// ** Fix Font Awesome icons appear large initially and then resize to the correct size **
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Suspense } from "react";
config.autoAddCss = false;
// ** ----- **

import Loading from "@/components/loading";

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
  icons: {
    icon: "/favicon.ico", // Use the path to your favicon
  },
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
      <body className="font-sukhumvit">
        <ThemeProvider>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
