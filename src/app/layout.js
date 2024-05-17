import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AuthProvider from "./components/authProvider/authProvider";

export const metadata = {
  title: "OpenMind",
  description: "page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AuthProvider>
          <div className="container center-container">
            <Navbar />
            {children}
          </div>
          <div className="footer-back">
            <div className="container">
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
