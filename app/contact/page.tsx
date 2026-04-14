'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'personal',
    amount: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        loanType: 'personal',
        amount: '',
        message: '',
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://picsum.photos/seed/contact-us/1920/600"
            alt="Contact Us"
            fill
            className="object-cover mix-blend-overlay"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            We&apos;re here to help you with your financial needs. Reach out to our expert team today.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have questions about our loan products or need assistance with your application? Our dedicated support team is ready to assist you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    PITAMBRA GLOBAL FOODS PRIVATE LIMITED<br />
                    H.NO. 17, BLOCK NO -13<br />
                    OLD RAJENDRA NAGAR<br />
                    Rajender Nagar<br />
                    Central Delhi, New Delhi<br />
                    Delhi, India – 110060
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 11 2345 6789</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">Email</h3>
                  <p className="text-gray-600">support@pitambraglobal.com</p>
                  <p className="text-gray-500 text-sm mt-1">We aim to reply within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner border border-gray-300">
              <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-500">
                <MapPin className="h-8 w-8 mb-2 text-gray-400" />
                <span>Google Maps Location</span>
                <span className="text-xs mt-1">Central Delhi, New Delhi</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <ShieldCheck className="h-8 w-8 text-amber-500" />
              <div>
                <h2 className="text-2xl font-bold text-blue-950">Loan Inquiry Form</h2>
                <p className="text-sm text-gray-500">Your information is 100% secure.</p>
              </div>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Request Submitted!</h3>
                <p className="text-green-700">
                  Thank you for reaching out. Our financial advisor will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="loanType" className="block text-sm font-medium text-gray-700 mb-2">Loan Type</label>
                    <select
                      id="loanType"
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors bg-white"
                    >
                      <option value="personal">Personal Loan</option>
                      <option value="business">Business Loan</option>
                      <option value="emergency">Emergency Loan</option>
                      <option value="working-capital">Working Capital Loan</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Required Amount (₹)</label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      required
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors"
                      placeholder="500000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 transition-colors resize-none"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-amber-500 text-blue-950 py-4 rounded-lg font-bold hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  {!isSubmitting && <Send className="h-5 w-5" />}
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
