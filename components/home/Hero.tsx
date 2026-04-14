'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-blue-950 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/finance_bg_hd.png"
          alt="Financial consultation"
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm flex items-center gap-2">
              <span className="w-8 h-px bg-amber-500"></span>
              Trusted Financial Partner
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fast, Simple & Reliable <span className="text-amber-500">Loan Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Get quick financial support with easy approval and transparent loan options tailored for individuals and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-md text-blue-950 bg-amber-500 hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl"
              >
                Apply for Loan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/calculator"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors backdrop-blur-sm"
              >
                Check Eligibility
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>Quick Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>Minimal Documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span>Transparent Terms</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
