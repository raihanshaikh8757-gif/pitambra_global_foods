'use client';

import { motion } from 'motion/react';
import { FileText, UploadCloud, CheckCircle, Banknote, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    icon: FileText,
    title: 'Apply Online',
    description: 'Start by filling out our simple and secure online application form. Provide basic details about yourself, your income, and the loan amount you require. It takes less than 5 minutes.',
    color: 'text-blue-500',
    bg: 'bg-blue-100',
    image: 'https://picsum.photos/seed/apply-online/600/400',
  },
  {
    id: 2,
    icon: UploadCloud,
    title: 'Document Verification',
    description: 'Upload your KYC documents, income proof, and bank statements securely through our encrypted portal. Our system ensures your data is protected at all times.',
    color: 'text-amber-500',
    bg: 'bg-amber-100',
    image: 'https://picsum.photos/seed/document-verify/600/400',
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Approval Process',
    description: 'Our expert financial team reviews your application and documents. We use advanced algorithms to quickly assess your eligibility and provide a fast decision.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-100',
    image: 'https://picsum.photos/seed/approval-process/600/400',
  },
  {
    id: 4,
    icon: Banknote,
    title: 'Loan Disbursement',
    description: 'Once approved and you accept the terms, the loan amount is disbursed directly to your registered bank account within 24-48 hours.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
    image: 'https://picsum.photos/seed/loan-disburse/600/400',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/how-it-works/1920/600"
            alt="How it works"
            fill
            className="object-cover mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-gray-300">
            A transparent, simple, and secure process to get the funds you need.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bg} ${step.color} mb-6 shadow-inner`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-blue-950 mb-4">
                      <span className="text-amber-500 mr-2">Step {step.id}:</span>
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-blue-900 items-center justify-center z-20 shadow-lg">
                    <span className="font-bold text-blue-900">{step.id}</span>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Banner */}
        <div className="mt-32 bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C20,0 50,0 100,100 Z" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <ShieldCheck className="h-16 w-16 text-amber-500 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have trusted Pitambra Global Foods Pvt Ltd for their financial needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-900 bg-amber-500 hover:bg-amber-400 transition-colors shadow-lg hover:shadow-xl"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
