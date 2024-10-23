import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:w-48 object-cover"
            src={news.imageUrl}
            alt={news.title}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(news.publishedAt)}</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{news.title}</h2>
          <p className="text-gray-600 mb-4">{news.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-600 font-medium">{news.source}</span>
            {news.url && (
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm"
              >
                Read More
                <ExternalLink size={14} className="ml-1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;