import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="shadow-inset-lg shadow-blue-800/80 p-3">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
