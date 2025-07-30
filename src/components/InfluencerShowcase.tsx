import { useState, useEffect } from 'react';

interface InfluencerShowcaseProps {
  activeTab: string;
}

const InfluencerShowcase = ({ activeTab }: InfluencerShowcaseProps) => {
  const isForfreelancers = activeTab === 'for freelancers';
  const [platform, setPlatform] = useState<'tiktok' | 'instagram' | 'restaurants' | 'retail'>(
    isForfreelancers ? 'restaurants' : 'tiktok'
  );
  const [selectedFilter, setSelectedFilter] = useState<string>(
    isForfreelancers ? 'restaurants' : (platform === 'tiktok' ? 'airplanelistener' : 'aesthetic')
  );
  
  // Specialized filters for companies to find very specific freelancers
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

  const currentData = isForfreelancers ? businesses : influencers;
  const availablePlatforms = isForfreelancers ? ['restaurants', 'retail'] : ['tiktok', 'instagram'];

  // Filter freelancers based on selected filter
  const getFilteredfreelancers = () => {
    if (isForfreelancers) return currentData;
    
    const freelancers = (currentData as any)[platform];
    return freelancers?.filter((freelancer: any) => freelancer.tags?.includes(selectedFilter)) || [];
  };

  // Reset platform and filter when activeTab changes
  useEffect(() => {
    setPlatform(isForfreelancers ? 'restaurants' : 'tiktok');
    setSelectedFilter(isForfreelancers ? 'restaurants' : 'airplanelistener');
  }, [isForfreelancers]);

  // Update filter when platform changes
  useEffect(() => {
    if (!isForfreelancers) {
      setSelectedFilter(platform === 'tiktok' ? 'airplanelistener' : 'aesthetic');
    }
  }, [platform, isForfreelancers]);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
      {/* Platform Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-50 rounded-2xl p-1.5 flex space-x-2 border border-gray-100">
          {availablePlatforms.map((tab) => (
            <button
              key={tab}
              onClick={() => setPlatform(tab as typeof platform)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                platform === tab
                  ? `${isForfreelancers 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : platform === 'tiktok' 
                        ? 'bg-indigo-500 text-white'
                        : 'bg-fuchsia-500 text-white'
                    }`
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {!isForfreelancers ? (
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
      {!isForfreelancers && (
        <div className="mb-8">
          <div className="flex flex-wrap gap-2.5 justify-center">
            {specializedFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  selectedFilter === filter.id
                    ? `${platform === 'tiktok' ? 'bg-indigo-500' : 'bg-fuchsia-500'} text-white`
                    : 'bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-100'
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
      <div className="space-y-5">
        {(isForfreelancers ? (currentData as any)[platform] : getFilteredfreelancers())?.slice(0, 3)?.map((item: any, index: number) => (
          <div key={index} className="bg-gray-50 rounded-xl p-5 hover:bg-gray-100 transition-all duration-200 border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className={`w-14 h-14 ${
                isForfreelancers
                  ? 'bg-gradient-to-br from-gray-100 to-gray-200'
                  : platform === 'tiktok'
                    ? 'bg-gradient-to-br from-indigo-100 to-indigo-200'
                    : 'bg-gradient-to-br from-fuchsia-100 to-fuchsia-200'
              } rounded-xl flex items-center justify-center text-2xl`}>
                {item.avatar}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 text-base mb-1">{item.name}</h4>
                <p className="text-sm text-gray-500 mb-2">
                  {isForfreelancers ? item.type : ''}
                  {item.location && `${isForfreelancers ? ' • ' : ''}${item.location}`}
                </p>
                <div className="flex space-x-4 text-sm">
                  {isForfreelancers ? (
                    <>
                      <span className="text-gray-700"><strong>{item.budget}</strong> budget</span>
                      <span className="text-orange-600"><strong>Due {item.deadline}</strong></span>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-700"><strong>{item.followers}</strong> followers</span>
                      <span className={platform === 'tiktok' ? 'text-indigo-600' : 'text-fuchsia-600'}>
                        <strong>{item.engagement}</strong> engagement
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                  Available
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-8 text-center">
        <button className="text-base text-gray-600 hover:text-gray-900 font-medium group inline-flex items-center gap-2">
          <span>View all {isForfreelancers ? `${platform} businesses` : 
                    `${specializedFilters.find(f => f.id === selectedFilter)?.label.toLowerCase()} freelancers`}</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InfluencerShowcase; 