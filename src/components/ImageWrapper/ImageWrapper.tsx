"use client";
import { CldImage } from "next-cloudinary";

const ImageWrapper = ({ dataUrl }) => {
  return (
    <CldImage
      placeholder="blur"
      blurDataURL={dataUrl}
      fill
      className="object-contain"
      src="https://res.cloudinary.com/immagina/image/upload/v1714049484/IMMAGINA/Portfolio/Fotografia/Teatro/Slava/05_qwhe5r.webp"
      alt="Description of my image"
    />
  );
};

export default ImageWrapper;
