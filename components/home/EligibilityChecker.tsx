'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, CheckCircle2, ChevronRight } from 'lucide-react';

export default function EligibilityChecker() {
  const [income, setIncome] = useState('');
  const [employment, setEmployment] = useState('salaried');
  const [amount, setAmount] = useState('');
  const [city, setCity] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock logic for eligibility
    if (Number(income) > 25000 && Number(amount) <= Number(income) * 10) {
      setResult('Eligible');
    } else {
      setResult('Not Eligible');
    }
  };

  return (
    <section className="py-24 bg-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Instant Eligibility
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Check Your Loan Eligibility Instantly</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Find out how much you can borrow in just a few seconds. Our smart algorithm calculates your eligibility based on your income and requirements.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'No impact on your credit score',
                'Get instant personalized results',
                '100% secure and confidential',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <form onSubmit={handleCheck} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (₹)</label>
                <input
                  type="number"
                  required
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                  placeholder="e.g. 50000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Employment Type</label>
                <select
                  value={employment}
                  onChange={(e) => setEmployment(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors bg-white"
                >
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount Required (₹)</label>
                <input
                  type="number"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                  placeholder="e.g. 500000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                  placeholder="e.g. New Delhi"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-950 text-white py-4 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                Check My Eligibility
                <ChevronRight className="h-5 w-5" />
              </button>

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center font-semibold ${
                    result === 'Eligible' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {result === 'Eligible' 
                    ? 'Congratulations! You are likely eligible for this loan.' 
                    : 'Based on the details provided, you might need to adjust your loan amount.'}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
