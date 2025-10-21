import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [formData, setFormData] = useState({
    insuredName: '',
    insuredAddress: '',
    insuredCity: '',
    insuredState: '',
    insuredZip: '',
    insuredPhone: '',
    certificateHolderName: '',
    certificateHolderAddress: '',
    certificateHolderCity: '',
    certificateHolderState: '',
    certificateHolderZip: '',
    policyNumber: '',
    effectiveDate: '',
    expirationDate: '',
    coverageType: 'general-liability',
    coverageLimit: '',
    additionalInsured: '',
    operationsDescription: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('COI Form Submitted:', formData)
    alert('Certificate of Insurance form submitted! (This is a demo)')
  }

  return (
    <>
      <Head>
        <title>Create Certificate of Insurance - Covu Agent Helper</title>
        <meta name="description" content="Create Certificate of Insurance with AI assistance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Certificate of Insurance (COI)
            </h1>
            <p className="text-gray-600">
              Need help? Ask ChatGPT to assist you in filling out this form!
            </p>
          </div>

          {/* Help Card */}
          <div className="max-w-4xl mx-auto mb-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-purple-900 mb-2">🤖 AI Assistant Available</h3>
            <p className="text-sm text-purple-800">
              Open this page in <strong>ChatGPT Atlas</strong> and ask: <em>"Help me create a COI"</em> or <em>"Fill out this form with sample data"</em>
            </p>
            <p className="text-xs text-purple-700 mt-1">
              ChatGPT can navigate to Farmers.com, gather information, and fill out this form automatically!
            </p>
          </div>

          {/* COI Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Insured Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                  Insured Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="insuredName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="insuredName"
                      name="insuredName"
                      value={formData.insuredName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="insuredAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="insuredAddress"
                      name="insuredAddress"
                      value={formData.insuredAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label htmlFor="insuredCity" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="insuredCity"
                      name="insuredCity"
                      value={formData.insuredCity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Los Angeles"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="insuredState" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="insuredState"
                        name="insuredState"
                        value={formData.insuredState}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="CA"
                        maxLength={2}
                      />
                    </div>
                    <div>
                      <label htmlFor="insuredZip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="insuredZip"
                        name="insuredZip"
                        value={formData.insuredZip}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="90001"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="insuredPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="insuredPhone"
                      name="insuredPhone"
                      value={formData.insuredPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </section>

              {/* Certificate Holder Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                  Certificate Holder
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="certificateHolderName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="certificateHolderName"
                      name="certificateHolderName"
                      value={formData.certificateHolderName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="ABC Corporation"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="certificateHolderAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="certificateHolderAddress"
                      name="certificateHolderAddress"
                      value={formData.certificateHolderAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="456 Business Blvd"
                    />
                  </div>
                  <div>
                    <label htmlFor="certificateHolderCity" className="block text-sm font-medium text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      id="certificateHolderCity"
                      name="certificateHolderCity"
                      value={formData.certificateHolderCity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="San Francisco"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="certificateHolderState" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="certificateHolderState"
                        name="certificateHolderState"
                        value={formData.certificateHolderState}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="CA"
                        maxLength={2}
                      />
                    </div>
                    <div>
                      <label htmlFor="certificateHolderZip" className="block text-sm font-medium text-gray-700 mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="certificateHolderZip"
                        name="certificateHolderZip"
                        value={formData.certificateHolderZip}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="94102"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                  Policy Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Policy Number *
                    </label>
                    <input
                      type="text"
                      id="policyNumber"
                      name="policyNumber"
                      value={formData.policyNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="POL-2024-12345"
                    />
                  </div>
                  <div>
                    <label htmlFor="coverageType" className="block text-sm font-medium text-gray-700 mb-1">
                      Coverage Type *
                    </label>
                    <select
                      id="coverageType"
                      name="coverageType"
                      value={formData.coverageType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general-liability">General Liability</option>
                      <option value="professional-liability">Professional Liability</option>
                      <option value="workers-comp">Workers Compensation</option>
                      <option value="commercial-auto">Commercial Auto</option>
                      <option value="property">Property Insurance</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="effectiveDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Effective Date *
                    </label>
                    <input
                      type="date"
                      id="effectiveDate"
                      name="effectiveDate"
                      value={formData.effectiveDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date *
                    </label>
                    <input
                      type="date"
                      id="expirationDate"
                      name="expirationDate"
                      value={formData.expirationDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="coverageLimit" className="block text-sm font-medium text-gray-700 mb-1">
                      Coverage Limit *
                    </label>
                    <input
                      type="text"
                      id="coverageLimit"
                      name="coverageLimit"
                      value={formData.coverageLimit}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="$1,000,000"
                    />
                  </div>
                  <div>
                    <label htmlFor="additionalInsured" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Insured
                    </label>
                    <input
                      type="text"
                      id="additionalInsured"
                      name="additionalInsured"
                      value={formData.additionalInsured}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Additional insured name (optional)"
                    />
                  </div>
                </div>
              </section>

              {/* Description of Operations */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500">
                  Description of Operations
                </h2>
                <div>
                  <label htmlFor="operationsDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe the operations, locations, vehicles, and any special items
                  </label>
                  <textarea
                    id="operationsDescription"
                    name="operationsDescription"
                    value={formData.operationsDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the nature of business operations..."
                  />
                </div>
              </section>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Generate Certificate
                </button>
              </div>
            </form>
          </div>

          {/* Instructions Card */}
          <div className="max-w-4xl mx-auto mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">💡 How ChatGPT Atlas Integration Works:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• This page includes a <code className="bg-blue-100 px-1 rounded">chatgpt:context</code> meta tag</li>
              <li>• ChatGPT can read instructions from the knowledge base to help fill this form</li>
              <li>• It can navigate to external sites (like Farmers.com) and return to complete the form</li>
              <li>• Try asking: "Help me create a COI" or "Fill this form with sample data from Farmers"</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

