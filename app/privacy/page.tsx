export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Privacy Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            PITAMBRA GLOBAL FOODS PRIVATE LIMITED (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">2. The Data We Collect About You</h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes bank account and payment card details, income details, and credit history.</li>
            <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">3. How We Use Your Personal Data</h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
