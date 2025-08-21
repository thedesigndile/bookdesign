
import { cn } from '@/lib/utils';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
  return (
    <div
      className={cn("flex items-center text-2xl font-semibold tracking-tight cursor-pointer font-playfair", className)}
      aria-label="Design Dile"
    >
      <span className="text-foreground">Design</span>
      <span className="w-1.5" />
      <span className="text-primary">Dile</span>
    </div>
  );
};

export default AnimatedLogo;
