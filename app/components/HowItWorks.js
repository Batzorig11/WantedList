export default function HowItWorks() {
  const steps = [
    {
      icon: "📝",
      title: "Post What You Want",
      desc: "Describe the item you're searching for — anything from used phones to rare parts.",
    },
    {
      icon: "🔍",
      title: "Sellers Find You",
      desc: "People who have that item will see your post and offer it to you directly.",
    },
    {
      icon: "💬",
      title: "Connect & Deal",
      desc: "Chat, negotiate, and complete your purchase safely and easily.",
    },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">How It Works</h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>

      <button className="mt-12 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
        Start Now
      </button>
    </section>
  );
}
