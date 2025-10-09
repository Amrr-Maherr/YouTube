"use client";
import { FetchChannelDetails } from "@/Store/ChannelSlice";
import { useParams } from "next/navigation";
import { useEffect,useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
function Page() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Channel = useSelector((state) => state.Channel.data);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);
  // fetch channel data
  useEffect(() => {
    if (id)
      dispatch(FetchChannelDetails(id));
  }, [id, dispatch]);
  // channel data
  useEffect(() => {
    if (Channel) {
      const ChannelData = Channel[0];
      const Title = Channel[0].brandingSettings.channel.title;
      const Description = Channel[0].brandingSettings.channel.description;
      const Snippets = Channel[0].snippet;
      const Statistics = Channel[0].statistics;
      const Banner = Channel[0].brandingSettings.image.bannerExternalUrl;
    }
  }, [Channel]);
  console.log(Channel,"ch");
  
  return (
    <>
    </>
  );
}

export default Page;
