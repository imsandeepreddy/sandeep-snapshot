import Header from "@/components/Header";

const Resume = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary mb-4">Resume</h1>
        <p className="text-lg text-gray-600">
          My professional experience and qualifications in DevOps engineering.
        </p>
      </main>
    </div>
  );
};

export default Resume;