'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How long does loan approval take?',
    answer: 'Our loan approval process is designed to be fast and efficient. For personal loans, if all documents are in order, approval can take as little as 24 hours. Business loans may take 48-72 hours depending on the complexity of the application.',
  },
  {
    question: 'What documents are required?',
    answer: 'Generally, you will need: \n1. Identity Proof (Aadhaar, PAN, Passport)\n2. Address Proof (Utility bill, Rental agreement)\n3. Income Proof (Last 3-6 months bank statements, Salary slips, or ITR for self-employed)\n4. Passport size photographs.',
  },
  {
    question: 'What is the minimum income requirement?',
    answer: 'The minimum income requirement varies by loan type. For personal loans, we typically require a minimum monthly income of ₹25,000. For business loans, the minimum annual turnover requirement is ₹40 Lakhs.',
  },
  {
    question: 'Can self-employed individuals apply?',
    answer: 'Yes, absolutely! We offer specialized loan products for self-employed individuals and business owners. You will need to provide your Income Tax Returns (ITR) for the last 2-3 years and business vintage proof.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No. We believe in complete transparency. All processing fees, interest rates, and any other applicable charges will be clearly communicated to you before you sign the loan agreement.',
  },
  {
    question: 'How is my personal data protected?',
    answer: 'We use bank-level encryption and strict data protection policies to ensure your personal and financial information is completely secure. We never share your data with unauthorized third parties.',
  },
  {
    question: 'Can I prepay my loan?',
    answer: 'Yes, you can prepay your loan. However, prepayment charges may apply depending on the loan type and the time of prepayment. Please refer to your specific loan agreement for details.',
  },
  {
    question: 'What happens if I miss an EMI?',
    answer: 'Missing an EMI can negatively impact your credit score and may incur late payment fees. If you anticipate difficulty in making a payment, please contact our support team immediately to discuss possible solutions.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-950" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <HelpCircle className="h-16 w-16 mx-auto text-amber-500 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our loan products and processes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-blue-950 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">Still have questions? We&apos;re here to help.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 transition-colors shadow-sm"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
