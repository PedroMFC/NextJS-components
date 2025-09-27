"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";

interface CityCardProps {
  imageSrc: StaticImageData | string;
  cityName: string;
  description: string;
}

// https://lightswind.com/components/card?component=seasonal-hover-cards
// https://lightswind.com/components/progress?component=3d-hover-gallery
const CityCard = ({ imageSrc, cityName, description }: CityCardProps) => (
  <motion.li
    tabIndex={0}
    className="group relative z-0 h-[500px] shadow-md overflow-hidden flex-none rounded-lg hover:z-20"
    initial={{ width: 100 }}
    whileHover={{ width: 500, scale: 1.1 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <Image
      src={imageSrc}
      quality={100}
      alt={`${cityName} city view`}
      fill
      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-out"
    />
    <motion.div 
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1, transition:{ delay: 0.2, duration: 0.2}} }
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="absolute inset-0 flex items-end justify-center pb-5 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
      <div className="text-center text-white p-6 rounded-lg max-w-md">
        <h2 className="text-3xl font-bold mb-2">{cityName}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  </motion.li>
);
 

export type City = {
  id: number;
  imageSrc: StaticImageData | string;
  name: string;
  description: string;
};

export default function GalleryHover({ cities }: { cities: City[] }) {
  return (
    <ul className="flex flex-row gap-4">
      {cities.map((city) => (
        <CityCard
          key={city.id}
          imageSrc={city.imageSrc}
          cityName={city.name}
          description={city.description}
        />
      ))}
    </ul>
  );
}
  