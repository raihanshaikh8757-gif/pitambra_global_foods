'use client';

import { motion } from 'motion/react';
import { FileText, UploadCloud, CheckCircle, Banknote } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Apply Online',
    description: 'Fill a simple loan application form with your basic details.',
    color: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    icon: UploadCloud,
    title: 'Upload Documents',
    description: 'Submit basic identity and income documents securely.',
    color: 'text-amber-500',
    bg: 'bg-amber-100',
  },
  {
    icon: CheckCircle,
    title: 'Verification',
    description: 'Our team reviews and verifies your details promptly.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-100',
  },
  {
    icon: Banknote,
    title: 'Loan Approval',
    description: 'Funds are disbursed quickly after approval directly to your account.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">Simple 4-Step Loan Process</h3>
          <p className="text-lg text-gray-600">
            We&apos;ve streamlined our application process to make it as quick and hassle-free as possible. Get your funds in record time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${step.bg} ${step.color} shadow-inner`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <div className="absolute top-8 right-8 text-6xl font-black text-gray-50 opacity-50 select-none pointer-events-none">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-amber-500 transition-colors relative z-10">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
