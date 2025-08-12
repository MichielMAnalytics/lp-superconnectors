interface ManifestoSectionProps {
  activeTab: string;
}

const ManifestoSection = ({ activeTab }: ManifestoSectionProps) => {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <p className="text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.15] tracking-tight">
            We're <span className="font-black">not another</span> job board.{' '}
            <br className="hidden sm:block" />
             We're building the <span className="font-black">future</span> of how companies and talent connect through seamless, intent-based AI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManifestoSection; 