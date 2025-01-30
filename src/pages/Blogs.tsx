import Header from "@/components/Header";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Getting Started with Kubernetes",
      date: "March 15, 2024",
      description: "A comprehensive guide to container orchestration with Kubernetes for beginners.",
      readTime: "5 min read",
    },
    {
      title: "CI/CD Best Practices in 2024",
      date: "March 10, 2024",
      description: "Learn about the latest continuous integration and deployment practices that can streamline your development workflow.",
      readTime: "8 min read",
    },
    {
      title: "Infrastructure as Code with Terraform",
      date: "March 5, 2024",
      description: "Explore how to manage cloud infrastructure efficiently using Terraform and best practices for scaling.",
      readTime: "6 min read",
    },
    {
      title: "Docker Container Security",
      date: "February 28, 2024",
      description: "Essential security practices for containerized applications and how to implement them effectively.",
      readTime: "7 min read",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8">Blogs</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-slate-800">{post.title}</CardTitle>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
                <CardDescription className="text-slate-500">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{post.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;