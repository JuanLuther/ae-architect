import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#00B894] hover:border-[#0984E3]">
      <div className="text-[#00B894] mb-6 text-4xl">{icon}</div>
      <h3 className="text-xl font-playfair mb-4 gradient-text">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
