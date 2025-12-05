"use client";
import { useParams } from "next/navigation";
import BannerComponent from "../Elements/BannerComponent";
import ChannelInfoComponent from "../Elements/ChannelInfoComponent";
import ChannelPageSkeleton from "../Elements/ChannelPageSkeleton";
import ChannelTabs from "../Elements/ChannelTabs";
import useVideoTitle from "@/hooks/useVideoTitle";
import { useChannelDetails } from "@/hooks/useChannelDetails";
import { useChannelVideos } from "@/hooks/useChannelVideos";
import { usePlaylistItems } from "@/hooks/usePlaylistItems";

export default function Page() {
  const { id } = useParams();
  const { data: Channel, isLoading: channelLoading, error: channelError } = useChannelDetails(id);

  const uploadsPlaylistId = Channel?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  const { data: ChannelVideos, isLoading: videosLoading } = useChannelVideos(uploadsPlaylistId);
  const { data: ChannelPlayList, isLoading: playlistLoading } = usePlaylistItems(uploadsPlaylistId);

  const loading = channelLoading || videosLoading || playlistLoading;
  const error = channelError;

  // Extract channel info
  const channelData = Channel?.[0];
  const snippet = channelData?.snippet;
  const statistics = channelData?.statistics;
  const branding = channelData?.brandingSettings;

  const banner = branding?.image?.bannerExternalUrl;
  const title = branding?.channel?.title;
  const description = branding?.channel?.description;
  const customUrl = snippet?.customUrl;
  const thumbnail = snippet?.thumbnails?.high?.url;
  const subscriberCount = Number(statistics?.subscriberCount).toLocaleString();
  const videoCount = Number(statistics?.videoCount).toLocaleString();
  const viewCount = Number(statistics?.viewCount).toLocaleString();

  useVideoTitle(title);
  // Handle states
  if (loading) return <ChannelPageSkeleton />;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!Channel)
    return <p className="text-center mt-10 text-gray-500">No channel data</p>;

  return (
    <div className="container mx-auto">
      {banner && <BannerComponent bannerUrl={banner} />}
      <ChannelInfoComponent
        thumbnail={thumbnail}
        title={title}
        customUrl={customUrl}
        subscriberCount={subscriberCount}
        videoCount={videoCount}
        viewCount={viewCount}
      />
      <ChannelTabs
        ChannelVideos={ChannelVideos}
        ChannelPlayList={ChannelPlayList}
        description={description}
        loading={loading}
      />
    </div>
  );
}
