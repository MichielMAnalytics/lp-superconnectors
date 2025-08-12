interface BrandBadgeProps {
  label: string;
  variant?: 'default' | 'on-dark';
  className?: string;
}

// Reusable brand badge used across the site. Default variant is designed for light backgrounds.
const BrandBadge = ({ label, variant = 'default', className = '' }: BrandBadgeProps) => {
  const isOnDark = variant === 'on-dark';

  const containerClasses = [
    'inline-flex items-center gap-2 rounded-full pl-2 pr-4 py-1.5 text-xs sm:text-sm font-medium border backdrop-blur-sm',
    isOnDark ? 'bg-white/20 text-white/90 border-white/20' : 'bg-black/10 text-gray-900 border-black/10',
    className,
  ].join(' ');

  const dotClasses = [
    'rounded-full w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center backdrop-blur-sm',
    isOnDark ? 'bg-white/20' : 'bg-black/10',
  ].join(' ');

  const arrowClasses = isOnDark ? 'text-white text-[10px] sm:text-xs' : 'text-gray-900 text-[10px] sm:text-xs';

  return (
    <div className={containerClasses}>
      <div className={dotClasses}>
        <span className={arrowClasses}>→</span>
      </div>
      {label}
    </div>
  );
};

export default BrandBadge;



