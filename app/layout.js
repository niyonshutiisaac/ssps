import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata = {
  title: "Next.js Dark Mode App",
  description: "Glassmorphism Navbar with Dark Mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
