import { Button } from "@/components/ui/button";

function VideoHeader({ title, channelTitle, publishedAt }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-[20px]">{title}</h1>
      <div className="flex items-center justify-between border-b pb-3 mb-2">
        <div>
          <p className="font-semibold text-[16px]">{channelTitle}</p>
          <p className="text-[20px] text-gray-500">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full">
          Subscribe
        </Button>
      </div>
    </>
  );
}
export default VideoHeader;
