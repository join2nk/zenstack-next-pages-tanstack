import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import "~/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

const queryClient = new QueryClient();
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {/* {children} */}

          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </main>
  );
};

export default MyApp;
