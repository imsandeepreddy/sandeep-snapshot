import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Welcome to my Portfolio
          </h1>
          <p className="text-lg text-slate-600">
            Professional DevOps Engineer passionate about automation and cloud technologies.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;