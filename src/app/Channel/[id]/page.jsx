"use client";
import { FetchChannelDetails } from "@/Store/ChannelSlice";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerComponent from "../Elements/BannerComponent";
import ChannelInfoComponent from "../Elements/ChannelInfoComponent";
import ChannelDescriptionComponent from "../Elements/ChannelDescriptionComponent";
import ChannelPageSkeleton from "../Elements/ChannelPageSkeleton";

export default function Page() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Channel = useSelector((state) => state.Channel.data);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  // fetch channel data
  useEffect(() => {
    if (id) dispatch(FetchChannelDetails(id));
  }, [id, dispatch]);

  if (loading) return <ChannelPageSkeleton/>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const channelData = Channel[0];
  const snippet = channelData.snippet;
  const statistics = channelData.statistics;
  const branding = channelData.brandingSettings;

  const banner = branding?.image?.bannerExternalUrl;
  const title = branding?.channel?.title;
  const description = branding?.channel?.description;
  const customUrl = snippet?.customUrl;
  const thumbnail = snippet?.thumbnails?.high?.url;
  const subscriberCount = Number(statistics?.subscriberCount).toLocaleString();
  const videoCount = Number(statistics?.videoCount).toLocaleString();
  const viewCount = Number(statistics?.viewCount).toLocaleString();
 const fallbackBanner =
   "https://via.placeholder.com/1280x360.png?text=No+Banner+Available";
  return (
    <div className="w-full">
      <BannerComponent bannerUrl={banner} fallbackUrl={fallbackBanner} />
      <ChannelInfoComponent
        thumbnail={thumbnail}
        title={title}
        customUrl={customUrl}
        subscriberCount={subscriberCount}
        videoCount={videoCount}
        viewCount={viewCount}
      />
      <ChannelDescriptionComponent description={description} />
    </div>
  );
}
