'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: 'personal',
    title: 'Personal Loans',
    description: 'Quick unsecured loans for personal financial needs. Whether it\'s for a wedding, medical emergency, or home renovation, we\'ve got you covered.',
    amount: '₹50K – ₹10L',
    rate: '10–18%',
    tenure: '12–60 months',
    eligibility: ['Age 21-58 years', 'Salaried or Self-employed', 'Minimum income ₹25,000/month'],
    image: 'https://picsum.photos/seed/personal-loan/800/600',
  },
  {
    id: 'business',
    title: 'Business Loans',
    description: 'Flexible financing for business growth. Expand your operations, purchase inventory, or manage cash flow with our tailored business solutions.',
    amount: '₹1L – ₹50L',
    rate: '11–19%',
    tenure: '12–72 months',
    eligibility: ['Business vintage of 3+ years', 'Minimum turnover ₹40 Lakhs', 'ITR for last 2 years'],
    image: 'https://picsum.photos/seed/business-loan/800/600',
  },
  {
    id: 'emergency',
    title: 'Emergency Loans',
    description: 'Instant funds for urgent situations. When life throws a curveball, our emergency loans provide the quick financial relief you need.',
    amount: '₹20K – ₹2L',
    rate: '12–20%',
    tenure: '6–24 months',
    eligibility: ['Valid ID proof', 'Active bank account', 'Steady source of income'],
    image: 'https://picsum.photos/seed/emergency-loan/800/600',
  },
  {
    id: 'working-capital',
    title: 'Working Capital Loans',
    description: 'Support for day-to-day business operations. Keep your business running smoothly without worrying about short-term cash flow gaps.',
    amount: '₹50K – ₹20L',
    rate: '11–18%',
    tenure: '6–36 months',
    eligibility: ['Registered business entity', 'Positive net worth', 'Satisfactory credit history'],
    image: 'https://picsum.photos/seed/working-capital/800/600',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/finance-products/1920/600"
            alt="Financial products"
            fill
            className="object-cover mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Loan Products</h1>
          <p className="text-xl text-gray-300">
            Tailored financial solutions to help you achieve your goals, whether personal or business.
          </p>
        </div>
      </div>

      {/* Products List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-blue-950">{product.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              
              <div className="grid grid-cols-2 gap-6 py-6 border-y border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Loan Amount</p>
                  <p className="font-semibold text-blue-900">{product.amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Interest Rate</p>
                  <p className="font-semibold text-blue-900">{product.rate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tenure</p>
                  <p className="font-semibold text-blue-900">{product.tenure}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Eligibility Criteria:</h4>
                <ul className="space-y-2">
                  {product.eligibility.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-sm"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
