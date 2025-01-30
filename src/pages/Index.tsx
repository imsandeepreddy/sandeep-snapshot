import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-secondary mb-4">
          Welcome to my Portfolio
        </h1>
        <p className="text-lg text-gray-600">
          Professional DevOps Engineer passionate about automation and cloud technologies.
        </p>
      </main>
    </div>
  );
};

export default Index;