import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary mb-4">About Me</h1>
        <p className="text-lg text-gray-600">
          I am a DevOps Engineer with expertise in automating and optimizing mission-critical deployments.
        </p>
      </main>
    </div>
  );
};

export default About;