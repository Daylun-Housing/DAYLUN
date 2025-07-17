import "./globals.css";
import { Suspense } from "react";

<link rel="icon" href="/favicon.ico" />

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <Suspense>
        <body className="h-full bg-[#04012A]">
          {children}
        </body>
      </Suspense>
    </html>
  );
}
