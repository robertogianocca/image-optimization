import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="border-white border-2 m-auto p-8 w-[400px]">
        <ul>
          <li className="p-4 hover:text-red-400">
            <Link href={"/cloudinary-next"}>1. Next Cloudinary PlugIn</Link>
          </li>
          <li className="p-4 hover:text-red-400">
            <Link href={"/next-image"}>2. Next Image Fill</Link>
          </li>
          <li className="p-4 hover:text-red-400">
            <Link href={"/next-image-wh"}>3. Next Image Width Height</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
