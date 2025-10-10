import Image from "next/image";

export default function BannerComponent({ bannerUrl, fallbackUrl }) {
  if (!bannerUrl && !fallbackUrl) return null;

  return (
    <div className="!w-full h-20 md:h-48 relative">
      <img
        src={bannerUrl || fallbackUrl}
        alt="Channel Banner"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
