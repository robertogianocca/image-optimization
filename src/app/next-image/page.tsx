import ImageWrapper from "@/components/ImageWrapper/ImageWrapper";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const nextImage = async () => {
  const url = getCldImageUrl({
    src: "https://res.cloudinary.com/immagina/image/upload/v1714049484/IMMAGINA/Portfolio/Fotografia/Teatro/Slava/05_qwhe5r.webp",
    blur: 2000,
    width: "max-content",
  });

  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;

  return (
    <div className="h-screen flex">
      <div className="w-[1200px] h-[800px] bg-red-200 m-auto relative">
        <Image
          placeholder="blur"
          blurDataURL={dataUrl}
          fill
          src="https://res.cloudinary.com/immagina/image/upload/v1714049484/IMMAGINA/Portfolio/Fotografia/Teatro/Slava/05_qwhe5r.webp"
          alt="Description of my image"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default nextImage;
