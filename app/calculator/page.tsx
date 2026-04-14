'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalculatorIcon, DollarSign, Percent, Calendar } from 'lucide-react';

export default function CalculatorPage() {
  const [amount, setAmount] = useState<number>(500000);
  const [rate, setRate] = useState<number>(12);
  const [tenure, setTenure] = useState<number>(36);

  // EMI Formula: P x R x (1+R)^N / [(1+R)^N-1]
  const p = amount;
  const r = rate / 12 / 100;
  const n = tenure;

  let emi = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (p > 0 && r > 0 && n > 0) {
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    totalPayment = emiValue * n;
    totalInterest = totalPayment - p;

    emi = Math.round(emiValue);
    totalPayment = Math.round(totalPayment);
    totalInterest = Math.round(totalInterest);
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <CalculatorIcon className="h-16 w-16 mx-auto text-amber-500 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">EMI Calculator</h1>
          <p className="text-xl text-gray-300">
            Plan your finances better. Calculate your monthly EMI instantly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Input Section */}
            <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-2xl font-bold text-blue-950 mb-8">Loan Details</h2>
              
              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-amber-500" />
                      Loan Amount
                    </label>
                    <span className="font-bold text-blue-900">₹ {amount.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="10000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>₹ 50K</span>
                    <span>₹ 50L</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Percent className="h-4 w-4 text-amber-500" />
                      Interest Rate (p.a.)
                    </label>
                    <span className="font-bold text-blue-900">{rate}%</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="24"
                    step="0.5"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>8%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      Loan Tenure (Months)
                    </label>
                    <span className="font-bold text-blue-900">{tenure} Months</span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="72"
                    step="6"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>6 M</span>
                    <span>72 M</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-8 md:p-12 bg-blue-50 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-blue-950 mb-8 text-center">Your EMI Details</h2>
              
              <motion.div
                key={emi}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 text-center mb-8"
              >
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-2">Monthly EMI</p>
                <p className="text-5xl font-bold text-blue-900">₹ {emi.toLocaleString('en-IN')}</p>
              </motion.div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="font-bold text-blue-950">₹ {amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-200">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-bold text-amber-600">₹ {totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-800 font-semibold">Total Payment</span>
                  <span className="font-bold text-blue-950 text-xl">₹ {totalPayment.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="w-full block text-center bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
                >
                  Apply for this Loan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
