import { ImageFrame } from "@/components/shared/ImageFrame";
import { cn } from "@/lib/utils";

/** Three-image editorial gallery: one wide, two staggered. */
export function ImageGallery({ images }) {
  const [first, ...rest] = images;
  return (
    <div className="grid gap-6 md:grid-cols-12">
      {first ? (
        <ImageFrame src={first.src} alt={first.alt} ratio="aspect-[16/9]" sizes="100vw" parallax="5" className="rounded-sm md:col-span-12" />
      ) : null}
      {rest.map((image, i) => (
        <ImageFrame
          key={image.src}
          src={image.src}
          alt={image.alt}
          ratio={i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={cn("rounded-sm", i === 0 ? "md:col-span-5" : "md:col-span-6 md:col-start-7 md:mt-32")}
        />
      ))}
    </div>
  );
}
