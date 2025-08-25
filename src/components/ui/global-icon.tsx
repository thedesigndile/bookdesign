import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlobalIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'muted';
  animated?: boolean;
  children?: React.ReactNode;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

const variantClasses = {
  default: 'text-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary',
  muted: 'text-muted-foreground',
};

export function GlobalIcon({ 
  icon: Icon, 
  size = 'md', 
  className, 
  variant = 'default',
  animated = true,
  children 
}: GlobalIconProps) {
  const IconComponent = (
    <Icon 
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        animated && 'transition-all duration-300',
        className
      )} 
    />
  );

  if (children) {
    return (
      <div className="flex items-center gap-2">
        {IconComponent}
        {children}
      </div>
    );
  }

  return IconComponent;
}

// Hover animation wrapper for icons in cards
export function AnimatedIconCard({ 
  icon: Icon, 
  children, 
  className,
  href,
  onClick 
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const IconWrapper = (
    <div className={cn(
      "group relative flex flex-col items-center justify-center p-6 bg-card/80 border border-border/50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 hover:border-primary",
      className
    )}>
      <Icon className="h-12 w-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block text-center">
        {IconWrapper}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="group block text-center w-full">
        {IconWrapper}
      </button>
    );
  }

  return IconWrapper;
}

// Inline icon with text for navigation and buttons
export function InlineIcon({ 
  icon: Icon, 
  children, 
  className,
  size = 'md',
  variant = 'default'
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'muted';
}) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2",
      className
    )}>
      <GlobalIcon 
        icon={Icon} 
        size={size} 
        variant={variant}
        animated={false}
      />
      <span className="font-medium">{children}</span>
    </div>
  );
}

// Badge icon for status indicators
export function BadgeIcon({ 
  icon: Icon, 
  children, 
  variant = 'default',
  className 
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'muted';
  className?: string;
}) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
      variant === 'primary' && "bg-primary/10 text-primary",
      variant === 'secondary' && "bg-secondary/10 text-secondary",
      variant === 'muted' && "bg-muted text-muted-foreground",
      variant === 'default' && "bg-background border border-border text-foreground",
      className
    )}>
      <GlobalIcon 
        icon={Icon} 
        size="sm" 
        variant={variant}
        animated={false}
      />
      {children}
    </div>
  );
}
