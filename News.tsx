import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ExternalLink, AlertCircle, Loader } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Simulated news data since we're in a demo environment
        const mockNews: NewsItem[] = [
          {
            id: '1',
            title: 'Cyclone Dana: IMD Issues Red Alert for Odisha Coast',
            description: 'Heavy rainfall and strong winds expected as Cyclone Dana approaches the Odisha coast. Authorities on high alert.',
            source: 'Odisha Weather Department',
            url: '#',
            publishedAt: new Date().toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1538947151057-dfe933d688d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          },
          {
            id: '2',
            title: 'Evacuation Begins in Coastal Districts as Cyclone Dana Intensifies',
            description: 'Over 50,000 people to be evacuated from low-lying areas. NDRF teams deployed in vulnerable locations.',
            source: 'Disaster Management Authority',
            url: '#',
            publishedAt: new Date().toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1593978301851-40c1849d47d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          },
          {
            id: '3',
            title: 'Emergency Services on High Alert as Cyclone Dana Approaches',
            description: 'Hospitals and emergency services prepare for potential impact. Additional medical teams deployed.',
            source: 'Health Department',
            url: '#',
            publishedAt: new Date().toISOString(),
            imageUrl: 'https://images.unsplash.com/photo-1495379572396-5f27a279ee91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          }
        ];

        setNews(mockNews);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news updates');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader className="animate-spin text-blue-600" size={32} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        <AlertCircle className="mr-2" />
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Latest Updates: Cyclone Dana</h1>
        <a
          href="https://www.imd.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span className="mr-1">IMD Updates</span>
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="space-y-6">
        {news.map((item) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Stay Informed</h2>
        <p className="text-blue-600">
          Follow official channels and local authorities for the latest updates on Cyclone Dana.
          Keep emergency contacts handy and follow evacuation instructions if issued.
        </p>
      </div>
    </div>
  );
};

export default News;