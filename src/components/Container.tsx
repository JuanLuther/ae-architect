interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function Container({ 
  children, 
  className = '', 
  size = 'medium' 
}: ContainerProps) {
  const maxWidth = {
    small: 'max-w-4xl',
    medium: 'max-w-6xl',
    large: 'max-w-7xl'
  }[size];

  return (
    <div className={`${maxWidth} mx-auto px-4 py-12 ${className}`}>
      {children}
    </div>
  );
}
