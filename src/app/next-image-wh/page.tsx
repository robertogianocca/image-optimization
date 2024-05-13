import ImageWrapper from "@/components/ImageWrapper/ImageWrapper";
import { getCldImageUrl } from "next-cloudinary";
import Image from "next/image";

const nextImageWh = async () => {
  const url = getCldImageUrl({
    src: "https://res.cloudinary.com/immagina/image/upload/v1714049484/IMMAGINA/Portfolio/Fotografia/Teatro/Slava/05_qwhe5r.webp",
    blur: 2000,
    width: 1000,
    height: 700,
  });

  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;

  return (
    <div className="h-screen flex">
      <div className="w-[1200px] h-[800px] bg-red-200 m-auto">
        <Image
          placeholder="blur"
          blurDataURL={dataUrl}
          width={1000}
          height={700}
          src="https://res.cloudinary.com/immagina/image/upload/v1714049484/IMMAGINA/Portfolio/Fotografia/Teatro/Slava/05_qwhe5r.webp"
          alt="Description of my image"
        />
      </div>
    </div>
  );
};

export default nextImageWh;
