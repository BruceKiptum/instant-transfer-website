import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, DollarSign, RefreshCcw, Eye, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const screenshots = Array.from({ length: 7 }, (_, i) => `/assets/screenshot${i + 1}.jpg`);

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { clientWidth } = carouselRef.current;
      const scrollAmount = clientWidth * 0.75;
      const newScroll =
        direction === 'left' ? carouselRef.current.scrollLeft - scrollAmount : carouselRef.current.scrollLeft + scrollAmount;
      carouselRef.current.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Instant Transfer App</title>
        <meta
          name="description"
          content="Withdraw and deposit to Deriv using MPESA instantly with enterprise-grade security and real-time tracking."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 text-gray-800 font-sans">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-green-600">Instant Transfer</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
            Get App
          </button>
        </nav>

        <header className="container mx-auto px-4 text-center py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Seamless MPESA to Deriv Transfers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience frictionless deposits and withdrawals with enterprise-grade security and real-time balance updates.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition">
            Get Started
          </button>
        </header>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">App Preview</h2>
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10 md:left-4"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              ref={carouselRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide py-4"
              style={{ scrollPadding: '10%' }}
            >
              {screenshots.map((src, idx) => (
                <motion.div
                  key={idx}
                  className="snap-center flex-shrink-0 w-40 md:w-56 lg:w-72 relative"
                  style={{ transform: `translateX(-${idx * 10}%)`, zIndex: screenshots.length - idx }}
                  whileHover={{ scale: 1.05, zIndex: screenshots.length + 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={src}
                    alt={`App screenshot ${idx + 1}`}
                    width={240}
                    height={480}
                    className="rounded-2xl shadow-xl object-contain"
                    priority={idx === 0}
                  />
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scroll('right')}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-100 z-10 md:right-4"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow-lg text-center flex flex-col items-center">
              <DollarSign size={48} className="text-green-600" />
              <h3 className="mt-4 text-xl font-semibold">Instant Deposits</h3>
              <p className="mt-2 text-gray-600">Real-time MPESA transactions.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg text-center flex flex-col items-center">
              <RefreshCcw size={48} className="text-green-600" />
              <h3 className="mt-4 text-xl font-semibold">Smart Withdrawals</h3>
              <p className="mt-2 text-gray-600">Efficient and secure payouts.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg text-center flex flex-col items-center">
              <Eye size={48} className="text-green-600" />
              <h3 className="mt-4 text-xl font-semibold">Live Balance</h3>
              <p className="mt-2 text-gray-600">Real-time account monitoring.</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg text-center flex flex-col items-center">
              <Settings size={48} className="text-green-600" />
              <h3 className="mt-4 text-xl font-semibold">Custom Settings</h3>
              <p className="mt-2 text-gray-600">User-friendly personalization.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 text-center mb-16">
          <a
            href="/downloads/instant-transfer.apk"
            download
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Download the App
          </a>
          <p className="mt-4 text-gray-500">Get the latest version now and elevate your trading experience.</p>
        </section>
      </main>
    </>
  );
}