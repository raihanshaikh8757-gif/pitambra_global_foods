export default function DataProtectionPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Data Protection Policy</h1>
        <div className="prose prose-blue max-w-none text-gray-600">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">1. Policy Statement</h2>
          <p className="mb-4">
            PITAMBRA GLOBAL FOODS PRIVATE LIMITED is fully committed to compliance with the requirements of the relevant Data Protection Laws. We will therefore follow procedures which aim to ensure that all employees, contractors, agents, consultants, partners or other servants of the company who have access to any personal data held by or on behalf of the company are fully aware of and abide by their duties under the Data Protection Laws.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">2. Data Security</h2>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          <h2 className="text-2xl font-semibold text-blue-900 mt-8 mb-4">3. Data Retention</h2>
          <p className="mb-4">
            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
          </p>
        </div>
      </div>
    </div>
  );
}
