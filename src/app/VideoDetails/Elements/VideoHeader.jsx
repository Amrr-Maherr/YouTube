import { Button } from "@/components/atoms/ui/button";
import ChannelAvatar from "./ChannelAvatar";

function VideoHeader({ title, channelTitle, ChannelDetails, viewCount }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-xl sm:text-2xl font-semibold mb-3 leading-snug">
        {title}
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChannelAvatar ChannelDetails={ChannelDetails} />
          <div className="flex flex-col">
            <p className="font-semibold text-[15px]">{channelTitle}</p>
            {viewCount && (
              <p className="text-sm text-gray-500">
                {parseInt(viewCount).toLocaleString()} views
              </p>
            )}
          </div>
        </div>
        <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-5">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default VideoHeader;
