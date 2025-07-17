import { useState, useEffect } from 'react';

interface InfluencerShowcaseProps {
  activeTab: string;
}

const InfluencerShowcase = ({ activeTab }: InfluencerShowcaseProps) => {
  const isForCreators = activeTab === 'for creators';
  const [platform, setPlatform] = useState<'tiktok' | 'instagram' | 'restaurants' | 'retail'>(
    isForCreators ? 'restaurants' : 'tiktok'
  );
  const [selectedFilter, setSelectedFilter] = useState<string>(
    isForCreators ? 'restaurants' : (platform === 'tiktok' ? 'airplanelistener' : 'aesthetic')
  );
  
  // Specialized filters for companies to find very specific creators
  const tiktokFilters = [
    { id: 'airplanelistener', label: 'Airplane Listeners', emoji: '✈️' },
    { id: 'sundayreset', label: 'Sunday Reset', emoji: '🏠' },
    { id: 'booktok', label: 'BookTok', emoji: '📚' },
    { id: 'morningroutine', label: 'Morning Routine', emoji: '☀️' },
    { id: 'plantparent', label: 'Plant Parent', emoji: '🌱' }
  ];

  const instagramFilters = [
    { id: 'aesthetic', label: 'Aesthetic Lifestyle', emoji: '✨' },
    { id: 'travel', label: 'Travel Stories', emoji: '🌍' },
    { id: 'fitness', label: 'Fitness Journey', emoji: '💪' },
    { id: 'foodie', label: 'Foodie Culture', emoji: '🍽️' },
    { id: 'fashion', label: 'Style & Fashion', emoji: '👗' }
  ];

  const specializedFilters = platform === 'tiktok' ? tiktokFilters : instagramFilters;

  const influencers = {
    tiktok: [
      { name: 'Alex Chen', followers: '12.3K', engagement: '8.5%', niche: 'Airplane Listeners', avatar: '✈️', location: 'Seattle, WA', tags: ['airplanelistener', 'sundayreset', 'morningroutine'] },
      { name: 'Maya Rodriguez', followers: '9.7K', engagement: '12.3%', niche: 'Korean Beauty Hacks', avatar: '✨', location: 'Los Angeles, CA', tags: ['sundayreset', 'morningroutine', 'plantparent'] },
      { name: 'Jordan Kim', followers: '14.8K', engagement: '9.7%', niche: 'Midnight Cooking', avatar: '👨‍🍳', location: 'Austin, TX', tags: ['morningroutine', 'booktok', 'airplanelistener'] },
      { name: 'Sarah Chen', followers: '11.2K', engagement: '15.1%', niche: 'Sunday Reset Vibes', avatar: '🏠', location: 'Denver, CO', tags: ['sundayreset', 'plantparent', 'booktok'] },
      { name: 'Marcus Lee', followers: '8.9K', engagement: '11.7%', niche: 'Plant Care Tips', avatar: '🌱', location: 'Portland, OR', tags: ['plantparent', 'sundayreset', 'airplanelistener'] },
      { name: 'Zoe Williams', followers: '13.5K', engagement: '9.3%', niche: 'Study With Me', avatar: '📝', location: 'Boston, MA', tags: ['booktok', 'morningroutine', 'plantparent'] }
    ],
    instagram: [
      { name: 'Emma Wilson', followers: '8.2K', engagement: '6.8%', niche: 'Vintage Thrift Finds', avatar: '👗', location: 'Brooklyn, NY', tags: ['fashion', 'aesthetic', 'travel'] },
      { name: 'Lucas Torres', followers: '11.5K', engagement: '11.2%', niche: 'Home Gym Setup', avatar: '💪', location: 'Miami, FL', tags: ['fitness', 'aesthetic', 'foodie'] },
      { name: 'Sofia Park', followers: '7.9K', engagement: '7.9%', niche: 'Solo Female Travel', avatar: '🌍', location: 'Portland, OR', tags: ['travel', 'aesthetic', 'fashion'] },
      { name: 'Riley Johnson', followers: '9.8K', engagement: '12.4%', niche: 'BookTok Reviews', avatar: '📚', location: 'Nashville, TN', tags: ['aesthetic', 'fashion', 'foodie'] },
      { name: 'Taylor Kim', followers: '10.3K', engagement: '8.6%', niche: 'Aviation Content', avatar: '✈️', location: 'Chicago, IL', tags: ['travel', 'fitness', 'aesthetic'] },
      { name: 'Jamie Davis', followers: '12.7K', engagement: '10.9%', niche: 'Study Aesthetics', avatar: '📝', location: 'Ann Arbor, MI', tags: ['aesthetic', 'fashion', 'fitness'] }
    ]
  };

  // Helper function to get a random date within the next 14 days
  const getRandomDeadline = (daysFromNow: number) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const businesses = {
    restaurants: [
      { name: 'Bella Vista Cafe', budget: '$2-5K', type: 'Authentic Neapolitan Pizza', avatar: '🍝', location: 'Downtown Seattle', deadline: getRandomDeadline(3) },
      { name: 'Green Bowl Co.', budget: '$1-3K', type: 'Plant-Based Bowls', avatar: '🥗', location: 'Austin Midtown', deadline: getRandomDeadline(7) },
      { name: 'Sunset Rooftop', budget: '$3-7K', type: 'Farm-to-Table Dining', avatar: '🌅', location: 'Brooklyn Heights', deadline: getRandomDeadline(12) }
    ],
    retail: [
      { name: 'Urban Threads', budget: '$2-4K', type: 'Sustainable Streetwear', avatar: '👔', location: 'Portland', deadline: getRandomDeadline(5) },
      { name: 'Tech Hub Store', budget: '$4-8K', type: 'Gaming Peripherals', avatar: '📱', location: 'San Francisco', deadline: getRandomDeadline(9) },
      { name: 'Bloom & Co.', budget: '$1-2K', type: 'Succulent Specialists', avatar: '🌸', location: 'LA Arts District', deadline: getRandomDeadline(14) }
    ]
  };

  const currentData = isForCreators ? businesses : influencers;
  const availablePlatforms = isForCreators ? ['restaurants', 'retail'] : ['tiktok', 'instagram'];

  // Filter creators based on selected filter
  const getFilteredCreators = () => {
    if (isForCreators) return currentData;
    
    const creators = (currentData as any)[platform];
    return creators?.filter((creator: any) => creator.tags?.includes(selectedFilter)) || [];
  };

  // Reset platform and filter when activeTab changes
  useEffect(() => {
    setPlatform(isForCreators ? 'restaurants' : 'tiktok');
    setSelectedFilter(isForCreators ? 'restaurants' : 'airplanelistener');
  }, [isForCreators]);

  // Update filter when platform changes
  useEffect(() => {
    if (!isForCreators) {
      setSelectedFilter(platform === 'tiktok' ? 'airplanelistener' : 'aesthetic');
    }
  }, [platform, isForCreators]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg max-w-md">
      {/* Platform Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 rounded-2xl p-1 flex space-x-1">
          {availablePlatforms.map((tab) => (
            <button
              key={tab}
              onClick={() => setPlatform(tab as typeof platform)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                platform === tab
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2">
                {!isForCreators ? (
                  <img 
                    src={tab === 'tiktok' ? '/tiktok.png' : '/insta.png'} 
                    alt={tab === 'tiktok' ? 'TikTok' : 'Instagram'} 
                    className="w-4 h-4"
                  />
                ) : (
                  <span className="text-lg">
                    {tab === 'restaurants' ? '🍽️' : '🏪'}
                  </span>
                )}
                <span>
                  {tab === 'tiktok' ? 'TikTok' : 
                   tab === 'instagram' ? 'Instagram' : 
                   tab === 'restaurants' ? 'Restaurants' : 'Retail'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Specialized Filters - Only for Companies */}
      {!isForCreators && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {specializedFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  selectedFilter === filter.id
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{filter.emoji}</span>
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Cards */}
      <div className="space-y-4">
        {(isForCreators ? (currentData as any)[platform] : getFilteredCreators())?.slice(0, 3)?.map((item: any, index: number) => (
          <div key={index} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-all duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center text-xl">
                {item.avatar}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                <p className="text-xs text-gray-600 mb-1">
                  {isForCreators ? item.type : ''}
                  {item.location && `${isForCreators ? ' • ' : ''}${item.location}`}
                </p>
                <div className="flex space-x-4 text-xs">
                  {isForCreators ? (
                    <>
                      <span className="text-gray-700"><strong>{item.budget}</strong> budget</span>
                      <span className="text-orange-600"><strong>Due {item.deadline}</strong></span>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-700"><strong>{item.followers}</strong> followers</span>
                      <span className="text-green-600"><strong>{item.engagement}</strong> engagement</span>
                    </>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium bg-green-100 text-green-700">
                  Available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-6 text-center">
        <button className="text-sm text-gray-600 hover:text-gray-900 font-medium">
          View all {isForCreators ? `${platform} businesses` : 
                    `${specializedFilters.find(f => f.id === selectedFilter)?.label.toLowerCase()} creators`} →
        </button>
      </div>
    </div>
  );
};

export default InfluencerShowcase; 