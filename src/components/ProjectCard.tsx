import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  address: string;
}

export default function ProjectCard({ 
  title, 
  description, 
  image,
  address 
}: ProjectCardProps) {
  return (
    <div className="group">
      <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-500">{address}</p>
    </div>
  );
}
