import BlogPost from '../BlogPost';

const Blog = () => (
  <section id="blog" className="py-16 bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
        Blog Posts
      </h2>
      <div className="max-w-3xl mx-auto">
        <BlogPost
          id="mitre-attack"
          title="Understanding MITRE ATT&CK Framework"
          date="2025-03-14 15:30"
          content="An in-depth guide to leveraging the MITRE ATT&CK framework for threat intelligence and security operations..."
        />
        <BlogPost
          id="threat-hunting"
          title="Threat Hunting Best Practices"
          date="2025-03-14 15:30"
          content="Essential techniques and tools for effective threat hunting in modern enterprise environments..."
        />
      </div>
    </div>
  </section>
);

export default Blog;
