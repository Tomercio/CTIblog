import { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown, Share2, Calendar } from 'lucide-react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, date, content, id }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [userIP, setUserIP] = useState('');

  // Format the date nicely
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Fetch user's IP on component mount
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };

    fetchIP();
  }, []);

  // Load votes from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem(`blog-post-${id}`);
    if (storedData) {
      const data = JSON.parse(storedData);
      setLikes(data.likes);
      setDislikes(data.dislikes);
    }

    // Check if user has already voted
    const userVotes = JSON.parse(localStorage.getItem('user-votes') || '{}');
    if (userIP && userVotes[userIP] && userVotes[userIP][id]) {
      setUserVote(userVotes[userIP][id]);
    }
  }, [id, userIP]);

  const saveToLocalStorage = (newLikes, newDislikes, voteType) => {
    localStorage.setItem(
      `blog-post-${id}`,
      JSON.stringify({
        likes: newLikes,
        dislikes: newDislikes,
      })
    );

    if (userIP) {
      const userVotes = JSON.parse(localStorage.getItem('user-votes') || '{}');
      if (!userVotes[userIP]) {
        userVotes[userIP] = {};
      }
      userVotes[userIP][id] = voteType;
      localStorage.setItem('user-votes', JSON.stringify(userVotes));
    }
  };

  const handleVote = (voteType) => {
    if (!userIP) return;

    if (userVote === voteType) {
      if (voteType === 'like') {
        setLikes((prev) => prev - 1);
      } else {
        setDislikes((prev) => prev - 1);
      }
      setUserVote(null);
      saveToLocalStorage(
        voteType === 'like' ? likes - 1 : likes,
        voteType === 'dislike' ? dislikes - 1 : dislikes,
        null
      );
    } else if (!userVote) {
      if (voteType === 'like') {
        setLikes((prev) => prev + 1);
      } else {
        setDislikes((prev) => prev + 1);
      }
      setUserVote(voteType);
      saveToLocalStorage(
        voteType === 'like' ? likes + 1 : likes,
        voteType === 'dislike' ? dislikes + 1 : dislikes,
        voteType
      );
    } else {
      if (voteType === 'like') {
        setLikes((prev) => prev + 1);
        setDislikes((prev) => prev - 1);
      } else {
        setLikes((prev) => prev - 1);
        setDislikes((prev) => prev + 1);
      }
      setUserVote(voteType);
      saveToLocalStorage(
        voteType === 'like' ? likes + 1 : likes - 1,
        voteType === 'dislike' ? dislikes + 1 : dislikes - 1,
        voteType
      );
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: content,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <article className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 mb-8 overflow-hidden group">
      <div className="p-8">
        {/* Title & Meta */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-gray-400 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(date)}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-6">
          <p className="text-gray-300 leading-relaxed">{content}</p>
        </div>

        {/* Interaction Bar */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-700/50">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => handleVote('like')}
              className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-all duration-300 ${
                userVote === 'like'
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10'
              }`}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{likes}</span>
            </button>
            <button
              onClick={() => handleVote('dislike')}
              className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-all duration-300 ${
                userVote === 'dislike'
                  ? 'text-red-400 bg-red-500/10'
                  : 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
              }`}
            >
              <ThumbsDown className="w-5 h-5" />
              <span>{dislikes}</span>
            </button>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center space-x-2 px-3 py-1 rounded-lg text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </article>
  );
};
BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BlogPost;
