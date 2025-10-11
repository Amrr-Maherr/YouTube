"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChannelPlayLists from "./ChannelPlayLists";
import ChannelVideosSection from "./ChannelVideosSection";
import ChannelDescriptionComponent from "./ChannelDescriptionComponent";
import HomeTab from "./HomeTab";

function ChannelTabs({ ChannelPlayList, ChannelVideos, description, loading }) {
  if (loading) {
    return <p className="text-white text-center py-6">Loading...</p>;
  }

  return (
    <Tabs defaultValue="home" className="w-full my-4 container mx-auto !p-0">
      <TabsList className="flex justify-start gap-4 bg-transparent border-b border-gray-700 rounded-none w-full !p-0">
        <TabsTrigger
          value="home"
          className="rounded-none px-4 py-2 text-gray-400 
            hover:text-white hover:bg-[#FF0000]/20 
            data-[state=active]:bg-[#FF0000] 
            data-[state=active]:text-white 
            data-[state=active]:font-semibold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-[#FF0000] 
            transition-colors"
        >
          Home
        </TabsTrigger>

        <TabsTrigger
          value="videos"
          className="rounded-none px-4 py-2 text-gray-400 
            hover:text-white hover:bg-[#FF0000]/20 
            data-[state=active]:bg-[#FF0000] 
            data-[state=active]:text-white 
            data-[state=active]:font-semibold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-[#FF0000] 
            transition-colors"
        >
          Videos
        </TabsTrigger>

        <TabsTrigger
          value="playlists"
          className="rounded-none px-4 py-2 text-gray-400 
            hover:text-white hover:bg-[#FF0000]/20 
            data-[state=active]:bg-[#FF0000] 
            data-[state=active]:text-white 
            data-[state=active]:font-semibold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-[#FF0000] 
            transition-colors"
        >
          Playlists
        </TabsTrigger>

        <TabsTrigger
          value="about"
          className="rounded-none px-4 py-2 text-gray-400 
            hover:text-white hover:bg-[#FF0000]/20 
            data-[state=active]:bg-[#FF0000] 
            data-[state=active]:text-white 
            data-[state=active]:font-semibold 
            data-[state=active]:border-b-2 
            data-[state=active]:border-[#FF0000] 
            transition-colors"
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
