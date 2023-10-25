import "./globals.css";
import SiteNavBar from "./../components/SiteNavBar";

import Footer from "./../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
