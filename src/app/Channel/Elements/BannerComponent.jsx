import Image from "next/image";

export default function BannerComponent({ bannerUrl }) {
  return (
    <div className="!w-full h-50 md:h-100 relative">
      <img
        src={bannerUrl || fallbackUrl}
        alt="Channel Banner"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
