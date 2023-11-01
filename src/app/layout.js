import { Navigation } from "@/components/navigation";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./logo.png"
        />
        <link rel="manifest" href="manifest.webmanifest" />
        <title>bagussp-imdb</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
