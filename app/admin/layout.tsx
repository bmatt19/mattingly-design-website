import "/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattingly Design Inc.",
  description: "Luxury architectural design in Southern Arizona",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brown-50 text-gray-800`}>
        {/* Header Section */}
        <header className="bg-brown-900 text-white p-6 text-center">
          <h1 className="text-4xl font-bold">Mattingly Design</h1>
          <p className="mt-2 text-xl">Luxury Architectural Design in Southern Arizona</p>
        </header>

        {/* Picture Gallery Section */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-center text-2xl font-semibold text-brown-900 mb-6">Our Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src="/images/portfolio1.jpg" alt="Portfolio 1" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src="/images/portfolio2.jpg" alt="Portfolio 2" className="w-full h-auto object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img src="/images/portfolio3.jpg" alt="Portfolio 3" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-12 px-6 bg-brown-50">
          <h2 className="text-center text-2xl font-semibold text-brown-900 mb-6">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-brown-900">Your Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="block text-brown-900">Email Address</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="block text-brown-900">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="w-full bg-brown-900 text-white p-2 rounded-md">Send Message</button>
            </form>
          </div>
        </section>

        {/* Main Children Section */}
        <main>{children}</main>
      </body>
    </html>
  );
}

