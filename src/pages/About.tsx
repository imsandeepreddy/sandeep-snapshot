import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <Avatar className="w-48 h-48 rounded-lg">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Profile picture"
                    className="object-cover"
                  />
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
              </div>
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-bold text-slate-800 mb-6">About Me</h1>
                <p className="text-lg text-slate-600 mb-4">
                  I am a DevOps Engineer with expertise in automating and optimizing
                  mission-critical deployments across large infrastructure.
                </p>
                <p className="text-lg text-slate-600">
                  With a strong background in cloud technologies and automation, I specialize
                  in implementing CI/CD pipelines, managing cloud infrastructure, and ensuring
                  high availability of production systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;