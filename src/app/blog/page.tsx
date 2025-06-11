'use client'; // This ensures the component renders on client side

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to the ToolTonic Blog</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get the latest updates, tips, and tutorials on file tools, productivity, and web technology.
        </p>
      </section>

      <section className="blog-posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
            <p className="text-gray-600 text-sm mb-4">
              Blog posts will appear here soon. Stay tuned for useful content.
            </p>
            <button className="text-blue-600 hover:underline text-sm">
              Learn More
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}