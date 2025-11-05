export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Find what you’re looking for — let sellers come to you
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Post the items you want to buy and let sellers reach out with offers
        that match your request.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
          Post What You Want
        </button>
        <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100">
          Browse Requests
        </button>
      </div>
    </section>
  );
}
