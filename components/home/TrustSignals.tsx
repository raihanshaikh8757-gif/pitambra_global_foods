'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Lock, CheckCircle, Users, HeadphonesIcon } from 'lucide-react';

const signals = [
  {
    icon: Lock,
    title: 'Secure Data Protection',
    description: 'Your financial data is encrypted and stored securely.',
  },
  {
    icon: Users,
    title: 'Professional Financial Team',
    description: 'Expert advisors to guide you through the process.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent Loan Terms',
    description: 'No hidden fees or surprise charges ever.',
  },
  {
    icon: ShieldCheck,
    title: 'Customer Privacy Protection',
    description: 'We never share your personal information.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reliable Customer Support',
    description: '24/7 assistance for all your queries.',
  },
];

export default function TrustSignals() {
  return (
    <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C20,0 50,0 100,100 Z" fill="rgba(255,255,255,0.1)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-500 font-semibold tracking-wider uppercase mb-3 text-sm">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Your Trust is Our Priority</h3>
          <p className="text-lg text-gray-300">
            We adhere to the highest standards of security and transparency to ensure your peace of mind throughout your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors">
                  <Icon className="h-6 w-6 text-amber-500" />
                </div>
                <h4 className="text-xl font-bold mb-3">{signal.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{signal.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
