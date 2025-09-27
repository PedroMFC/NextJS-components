import GalleryHover, { City } from "@/components/gallery-hover";
import GalleryStack from "@/components/gallery-stack";

export default function Page() {
  const cities: City[] = [
    {
      id: 1,
      imageSrc: "/assets/cities/london.png",
      name: "London",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      imageSrc: "/assets/cities/newyork.png",
      name: "New York",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      imageSrc: "/assets/cities/madrid.png",
      name: "Madrid",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      imageSrc: "/assets/cities/granada.png",
      name: "Granada",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <main className="space-y-12 p-6">
      <section>
        <h1 className="text-2xl font-bold mb-4">Gallery Hover</h1>
        <GalleryHover cities={cities} />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Gallery Stack</h2>
        <GalleryStack
          items={cities.map((c) => ({
            id: c.id,
            imageSrc: c.imageSrc,
            title: c.name,
            description: c.description,
          }))}
          width={500}
          height={500}
        />
      </section>
    </main>
  );
}
