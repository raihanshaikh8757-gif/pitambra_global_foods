'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Briefcase, User, AlertTriangle, Building, ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Personal Loan',
    description: 'Quick unsecured loans for personal financial needs.',
    icon: User,
    color: 'bg-blue-100 text-blue-900',
    amount: '₹50K – ₹10L',
    rate: '10–18%',
    tenure: '12–60 months',
  },
  {
    title: 'Business Loan',
    description: 'Flexible financing for business growth.',
    icon: Briefcase,
    color: 'bg-amber-100 text-amber-600',
    amount: '₹1L – ₹50L',
    rate: '11–19%',
    tenure: '12–72 months',
  },
  {
    title: 'Emergency Loan',
    description: 'Instant funds for urgent situations.',
    icon: AlertTriangle,
    color: 'bg-red-100 text-red-600',
    amount: '₹20K – ₹2L',
    rate: '12–20%',
    tenure: '6–24 months',
  },
  {
    title: 'Working Capital Loan',
    description: 'Support for business operations.',
    icon: Building,
    color: 'bg-emerald-100 text-emerald-600',
    amount: '₹50K – ₹20L',
    rate: '11–18%',
    tenure: '6–36 months',
  },
];

export default function LoanProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm">Our Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Comprehensive Loan Products</h3>
          <p className="text-lg text-gray-600">
            We offer a variety of loan options designed to meet your specific financial needs with competitive rates and flexible terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${product.color}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-amber-500 transition-colors">{product.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{product.description}</p>
                <Link href="/products" className="inline-flex items-center text-blue-900 font-semibold text-sm hover:text-amber-500 transition-colors">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 overflow-hidden">
          <h4 className="text-2xl font-bold text-blue-950 mb-8 text-center">Loan Comparison Table</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">Loan Type</th>
                  <th className="py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                  <th className="py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">Interest Rate</th>
                  <th className="py-4 px-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">Tenure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.slice(0, 3).map((product) => (
                  <tr key={product.title} className="hover:bg-white transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-blue-950">{product.title}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{product.amount}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{product.rate}</td>
                    <td className="py-4 px-6 text-sm text-gray-600">{product.tenure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
