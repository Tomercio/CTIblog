import React from "react";
import { ArrowRight } from "lucide-react";

const NewsCard = ({ icon, title, date, summary, category }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-sm text-gray-400">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{summary}</p>
        <button className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
          <span>Read Analysis</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

export default NewsCard;
