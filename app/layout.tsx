import "./globals.css";
import { Suspense } from "react";


/**
 * ROOT LAYOUT
 * @param {React.ReactNode} 
 * @returns {JSX.Element}
 * 
 * Wraps the page
 */
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Suspense>
        <body className="h-full">
          {children}
        </body>
      </Suspense>
    </html>
  );
}


