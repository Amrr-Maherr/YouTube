"use client";
import { FetchChannelDetails } from "@/Store/ChannelSlice";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerComponent from "../Elements/BannerComponent";
import ChannelInfoComponent from "../Elements/ChannelInfoComponent";
import ChannelPageSkeleton from "../Elements/ChannelPageSkeleton";
import { FetchChannelVideos } from "@/Store/ChannelVideosSlice";
import { FetchPlaylistItems } from "@/Store/PlaylistSlice";
import ChannelTabs from "../Elements/ChannelTabs";
import useVideoTitle from "@/hooks/useVideoTitle";

export default function Page() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Channel = useSelector((state) => state.Channel.data);
  const ChannelVideos = useSelector((state) => state.ChannelVideos.data);
  const ChannelPlayList = useSelector((state) => state.Playlist.data);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  
  useEffect(() => {
    if (id) dispatch(FetchChannelDetails(id));
  }, [id, dispatch]);

  // Fetch channel videos & playlists
  useEffect(() => {
    if (Channel && Channel.length > 0) {
      const uploadsPlaylistId =
        Channel[0]?.contentDetails?.relatedPlaylists?.uploads;
      if (uploadsPlaylistId) {
        dispatch(FetchChannelVideos(uploadsPlaylistId));
        dispatch(FetchPlaylistItems(uploadsPlaylistId));
      }
    }
  }, [Channel, dispatch]);

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
