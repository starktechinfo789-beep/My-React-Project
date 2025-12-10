import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Scroll-enabled layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {/* Add padding so top sections don't hide behind navbar */}
        <main className="pt-20">{children}</main>

        <Footer />

      </body>
    </html>
  );
}
