interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Section({ 
  children, 
  title, 
  subtitle,
  className = '' 
}: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-semibold mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
