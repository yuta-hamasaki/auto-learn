
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Provider from "./provider"

const outfit = Outfit({subsets: ['latin']})


export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body
          className={outfit.className}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
