import "./globals.css";
import NavbarUi from "./components/NavbarUi";
import { Epilogue } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Nav/Header";
import Header from "./components/Nav/Header";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Kinde Auth",
  description: "Kinde Auth with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${epilogue.className}  ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        {/* <Navbar /> */}
        <Header />
        {/* <NavbarUi/> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
