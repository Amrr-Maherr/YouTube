"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChannelPlayLists from "./ChannelPlayLists";
import ChannelVideosSection from "./ChannelVideosSection";
import ChannelDescriptionComponent from "./ChannelDescriptionComponent";
import HomeTab from "./HomeTab";

function ChannelTabs({ ChannelPlayList, ChannelVideos, description, loading }) {
  if (loading) {
    return (
      <p className="text-white">loading</p>
    )
  }
  return (
    <Tabs defaultValue="home" className="w-full my-4 container mx-auto !p-0">
      <TabsList className="flex justify-start gap-4 bg-transparent border-b border-gray-700 rounded-none w-full !p-0">
        <TabsTrigger
          value="home"
          className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-white text-white data-[state=active]:font-semibold"
        >
          Home
        </TabsTrigger>

        <TabsTrigger
          value="videos"
          className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-white text-white data-[state=active]:font-semibold"
        >
          Videos
        </TabsTrigger>

        <TabsTrigger
          value="playlists"
          className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-white text-white data-[state=active]:font-semibold"
        >
          Playlists
        </TabsTrigger>

        <TabsTrigger
          value="about"
          className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-white text-white data-[state=active]:font-semibold"
        >
          About
        </TabsTrigger>
      </TabsList>

      <TabsContent value="home" className="mt-4">
        <HomeTab
          ChannelVideos={ChannelVideos}
          ChannelPlayList={ChannelPlayList}
          description={description}
        />
      </TabsContent>

      <TabsContent value="videos" className="mt-4">
        <ChannelVideosSection ChannelVideos={ChannelVideos} />
      </TabsContent>

      <TabsContent value="playlists" className="mt-4">
        <ChannelPlayLists ChannelPlayList={ChannelPlayList} />
      </TabsContent>

      <TabsContent value="about" className="mt-4">
        <ChannelDescriptionComponent description={description} />
      </TabsContent>
    </Tabs>
  );
}

export default ChannelTabs;
