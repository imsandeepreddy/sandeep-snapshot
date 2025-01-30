import Header from "@/components/Header";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary mb-4">Blogs</h1>
        <p className="text-lg text-gray-600">
          Stay tuned for my latest thoughts and insights on DevOps practices and technologies.
        </p>
      </main>
    </div>
  );
};

export default Blogs;