'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Heart, Lock, TrendingUp, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/about-company/1920/600"
            alt="About Pitambra Global Foods"
            fill
            className="object-cover mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300">
            Empowering individuals and businesses with reliable financial solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" />
              Who We Are
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
              PITAMBRA GLOBAL FOODS PRIVATE LIMITED
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Despite our name, we are a dedicated financial services and loan provider company. We specialize in offering quick, reliable, and transparent lending solutions tailored to meet the diverse needs of individuals and small businesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our goal is to bridge the financial gap by providing accessible credit, ensuring that our clients can achieve financial stability and growth without unnecessary hurdles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
          >
            <Image
              src="https://picsum.photos/seed/office-team/800/1000"
              alt="Our Team"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm">Our Principles</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">What Drives Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Company Mission',
                description: 'To provide accessible, fair, and transparent financial solutions that empower our clients to reach their goals.',
                color: 'text-blue-500',
                bg: 'bg-blue-100',
              },
              {
                icon: Heart,
                title: 'Customer Commitment',
                description: 'We put our customers first, ensuring a seamless experience with empathetic and responsive support.',
                color: 'text-red-500',
                bg: 'bg-red-100',
              },
              {
                icon: TrendingUp,
                title: 'Transparent Lending',
                description: 'No hidden fees. We believe in complete transparency regarding interest rates, terms, and conditions.',
                color: 'text-emerald-500',
                bg: 'bg-emerald-100',
              },
              {
                icon: Lock,
                title: 'Secure Digital Process',
                description: 'Your data privacy is paramount. We employ state-of-the-art security measures to protect your information.',
                color: 'text-amber-500',
                bg: 'bg-amber-100',
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${value.bg} ${value.color} shadow-inner`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-blue-950 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-900 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C20,0 50,0 100,100 Z" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">10K+</div>
              <div className="text-lg text-blue-100 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">₹500Cr+</div>
              <div className="text-lg text-blue-100 font-medium">Loans Disbursed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2">98%</div>
              <div className="text-lg text-blue-100 font-medium">Approval Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
