export default function WantedListPreview() {
  const posts = [
    {
      title: "Looking for used iPhone 12",
      desc: "Prefer 128GB version, good battery, budget around $300.",
      location: "Ulaanbaatar",
      date: "2 hours ago",
    },
    {
      title: "Need Toyota Corolla 2010 front bumper",
      desc: "Color doesn’t matter, just needs to fit 2010 model.",
      location: "Darkhan",
      date: "1 day ago",
    },
    {
      title: "Searching for secondhand study desk",
      desc: "Simple wooden desk preferred, budget up to 150,000₮.",
      location: "Erdenet",
      date: "3 days ago",
    },
    {
      title: "Looking for LEGO Star Wars set #75192",
      desc: "Collector’s edition, any condition acceptable.",
      location: "Ulaanbaatar",
      date: "5 days ago",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Wanted Items People Are Searching For
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.desc}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>📍 {post.location}</span>
              <span>🕒 {post.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
          View All Requests
        </button>
      </div>
    </section>
  );
}
