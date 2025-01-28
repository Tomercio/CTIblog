import { Shield, Terminal, AlertTriangle } from 'lucide-react';

const Home = () => (
  <section
    id="home"
    className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
  >
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
              Who am I?
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed text-lg">
              Hello, I&apos;m Tomer, a passionate Cyber Threat Intelligence
              Enthusiast dedicated to understanding and analyzing the evolving
              landscape of digital threats.
            </p>

            <div className="border-l-4 border-blue-500 pl-6 my-8">
              <p className="text-xl text-blue-400 font-medium">
                &quot;In the realm of cybersecurity, knowledge isn&apos;t just power
                – it&apos;s protection.&quot;
              </p>
            </div>

            <p className="leading-relaxed text-lg">
              This blog serves as a platform where I share insights, analysis, and
              knowledge about the latest cyber threats, attack patterns, and defense
              strategies. My goal is to contribute to the cybersecurity community by
              providing actionable intelligence and fostering discussions about
              emerging threats.
            </p>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <Terminal className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Technical Analysis
                </h3>
                <p className="text-gray-400">
                  Deep dives into malware, vulnerabilities, and attack patterns
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <AlertTriangle className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Threat Intelligence
                </h3>
                <p className="text-gray-400">
                  Latest insights on emerging cyber threats and actors
                </p>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Defense Strategies
                </h3>
                <p className="text-gray-400">
                  Practical security measures and best practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
