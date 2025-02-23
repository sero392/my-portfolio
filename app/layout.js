
import Navbar from "@/components/Navbar";
import '../styles/globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="shadow-inset-lg shadow-teal-500/50 p-3">
        <Navbar />
        {children} 
      </body>
    </html>
  );
}
