import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Marya Getu | Frontend & Full-Stack Developer",
  description: "Portfolio of Marya Getu: React and Next.js developer, data analytics learner, and Amharic voice narrator.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Noto+Sans+Ethiopic:wght@400;600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: "try{if(localStorage.theme==='dark')document.documentElement.classList.add('dark')}catch(e){}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
