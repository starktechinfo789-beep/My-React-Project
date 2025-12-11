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
          <a
          href="#contact"
          className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transition z-50 animate-bounce"
          title="Go to Contact Section"
        >
          👋

        </a>

        <Footer />

      </body>
    </html>
  );
}
