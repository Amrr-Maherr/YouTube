import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[var(--background)] text-[var(--foreground)] px-4">
      <div className="w-40 sm:w-60 md:w-72 lg:w-80 mb-6">
        <Image
          src="/assets/images/monkey.png"
          alt="Oops! Page not found."
          width={500}
          height={500}
          className="w-full h-auto"
          priority
        />
      </div>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-center">
        404
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-md sm:max-w-lg text-center">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors duration-300"
      >
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
