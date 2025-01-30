import Header from "@/components/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile picture"
              />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
              <p className="text-lg text-slate-600">
                I am a DevOps Engineer with expertise in automating and optimizing
                mission-critical deployments across large infrastructure.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;