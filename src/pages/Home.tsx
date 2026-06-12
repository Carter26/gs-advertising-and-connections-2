export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          GS Advertising & Connections
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Connecting local businesses with youth sports teams, high school athletic programs, and community organizations through meaningful sponsorship partnerships.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Local Businesses</h2>
            <p className="text-gray-600">Connect with community teams and organizations to build your brand locally.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Youth Sports</h2>
            <p className="text-gray-600">Access sponsorship opportunities to support your team's growth and success.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Community</h2>
            <p className="text-gray-600">Build meaningful connections that strengthen our local community.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
