import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image src="/assets/icons/Logo.svg" alt="Logo" width={90} height={20} priority />
      </Link>
    </div>
  );
};

export default Logo;
