import { Metadata } from "next"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Owlcade",
    template: "Owlcade || %s",
  },
  description: 'Learn in-demand tech skills from the best instructors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
