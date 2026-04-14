export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Terms & Conditions</h1>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and PITAMBRA GLOBAL FOODS PRIVATE LIMITED (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-4">
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">3. User Representations</h2>
          <p className="mb-4">
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
            <li>You are not a minor in the jurisdiction in which you reside.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
