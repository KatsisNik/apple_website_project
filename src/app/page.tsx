'use client'
import Image from "next/image";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="assets/images/apple.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Apple iPhone</title>
      <body>
      <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      </main>
      </body>
    </head>
  </html>
  );
}
