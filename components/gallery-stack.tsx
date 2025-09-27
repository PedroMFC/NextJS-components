"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

export type StackItem = {
  id: number | string;
  imageSrc: string | StaticImageData;
  title?: string;
  description?: string;
};

export interface GalleryStackProps {
  items: StackItem[];
  width?: number; // px
  height?: number; // px
  className?: string;
  onReorder?: (items: StackItem[]) => void;
}

export default function GalleryStack({
  items,
  width = 500,
  height = 500,
  className = "",
}: GalleryStackProps) {
  // Keep a local order so we can send the dragged item to the end
  const [order, setOrder] = useState<StackItem[]>(items);

  // Sync when prop changes
  useEffect(() => setOrder(items), [items]);

  const sizeStyle = { width: `${width}px`, height: `${height}px` } as const;

  const sendToEnd = (id: StackItem["id"]) => {
    setOrder((prev) => {
      const idx = prev.findIndex((x) => x.id === id);
      if (idx === -1) return prev;
      const moved = prev[idx];
      const next = [...prev.slice(0, idx), ...prev.slice(idx + 1), moved];
      return next;
    });
  };

  // Rotating angles
  const minAngle = -10;
  const maxAngle = 10;

  return (
    <div
      className={`relative ${className}`}
      style={sizeStyle}
    >
      {order.map((item, index) => {
        const depth = order.length - index; 
        const rotatingAngle = minAngle + Math.random() * (maxAngle - minAngle); 
        return (
          <motion.div
            key={item.id}
            layout
            initial={{ x: 0, y: 0, rotate: rotatingAngle }}
            animate={{ x: 0, y: 0, scale: 1, rotate: rotatingAngle }}
            drag
            dragConstraints={{left: -100, right: 100, top: -100, bottom: 100}}
            dragElastic={0.1}
            dragMomentum={true}
            onDragEnd={() => sendToEnd(item.id)}
            style={{ zIndex: depth }}
            className="absolute inset-0 rounded-xl shadow-xl overflow-hidden cursor-grab active:cursor-grabbing"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Subtle depth styling per layer */}
            <div className={`absolute inset-0 rounded-xl ${index === 0 ? "" : "ring-1 ring-black/10"}`} />

            <Image
              src={item.imageSrc}
              alt={item.title ? `${item.title} image` : "gallery image"}
              fill
              className="object-cover"
              priority={index === order.length - 1}
            />

            {/* Bottom gradient + text */}
            {(item.title || item.description) && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-start">
                <div className="p-4 text-white">
                  {item.title && (
                    <h3 className="text-xl font-semibold drop-shadow-sm">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="text-sm text-white/90 max-w-md drop-shadow-sm">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
