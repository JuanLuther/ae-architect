import Image from "next/image";

interface HeroSectionProps {
  title: string;
  image: string;
  height?: string;
  overlay?: boolean;
  subtitle?: string;
}

export default function HeroSection({
  title = "Architecture",
  image = "ae.svg",
  height = "h-[400px]",
  overlay = true,
  subtitle = "Firm",
}: HeroSectionProps) {
  return (
    <div className={`relative ${height} w-full`}>
      <Image src={image} alt={title} fill className="object-cover" priority />
      <div
        className={`absolute inset-0 ${
          overlay ? "bg-black/40" : ""
        } flex flex-col items-center justify-center text-center`}
      >
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl text-white/90 max-w-2xl px-4">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
