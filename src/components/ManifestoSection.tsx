interface ManifestoSectionProps {
  activeTab: string;
}

const ManifestoSection = ({ activeTab }: ManifestoSectionProps) => {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <p className="text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.15] tracking-tight">
            We're <span className="font-black">not another</span> freelance marketplace.{' '}
            <br className="hidden sm:block" />
             We're building the <span className="font-black">future</span> of how companies and freelancers connect through seamless, intent-based AI.
            <span className="relative inline-block">
              <span className={`absolute inset-x-0 bottom-2 h-3 -skew-x-6 -z-10 opacity-10 ${activeTab === 'for freelancers' ? 'bg-indigo-500' : 'bg-indigo-500'}`}></span>
            </span>
          </p>

          {/* Key Points */}
          <div className="flex items-center justify-center gap-6 text-xl">
            <span className="text-gray-900 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'for freelancers' ? 'bg-indigo-500' : 'bg-teal-600'}`}></span>
              {activeTab === 'for companies' ? 'No gatekeeping' : 'No agencies'}
            </span>
            <span className="text-gray-900 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === 'for freelancers' ? 'bg-indigo-500' : 'bg-teal-600'}`}></span>
              {activeTab === 'for companies' ? 'No hefty fees' : 'No percentages'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManifestoSection; 