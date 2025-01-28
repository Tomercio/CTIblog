import React from "react";
import NewsCard from "../NewsCard";
import { Shield, AlertTriangle, Zap } from "lucide-react";

const CTINews = () => (
  <section
    id="news"
    className="py-16 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-xl mb-4">
          <AlertTriangle className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
          Latest CTI News
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Stay informed about the latest developments in cyber threats and
          security landscape
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NewsCard
          icon={<Shield className="w-6 h-6" />}
          title="New Ransomware Strain Targets Critical Infrastructure"
          date="2025-03-14 12:30"
          summary="Analysis of a sophisticated ransomware campaign targeting industrial control systems..."
          category="Critical Alert"
        />
        <NewsCard
          icon={<Zap className="w-6 h-6" />}
          title="APT Group Expands Operations"
          date="2025-03-14 12:38"
          summary="Tracking the evolution of attack patterns from a prominent threat actor group..."
          category="Threat Actor"
        />
        <NewsCard
          icon={<AlertTriangle className="w-6 h-6" />}
          title="Zero-Day Vulnerability in Popular Framework"
          date="2025-03-14 12:42"
          summary="Technical deep-dive into a critical vulnerability affecting millions of applications..."
          category="Vulnerability"
        />
      </div>
    </div>
  </section>
);

export default CTINews;
