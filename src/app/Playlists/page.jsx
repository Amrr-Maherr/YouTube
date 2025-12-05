"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import VideoCard from "@/components/VideoCard/Index";
import { Library, Plus, PlayCircle, Trash2, Edit } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Page() {
  const [playlists, setPlaylists] = useLocalStorage("playlists", []);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState("");

  const createPlaylist = () => {
    if (newPlaylistName.trim() && !playlists.some(p => p.name === newPlaylistName.trim())) {
      const newPlaylist = {
        id: Date.now().toString(),
        name: newPlaylistName.trim(),
        videos: [],
        createdAt: Date.now(),
      };
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylistName("");
      setShowCreateForm(false);
    }
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists(playlists.filter(p => p.id !== playlistId));
  };

  return (
    <section className="container py-2 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-4">
        <div className="flex items-center gap-3">
          <Library className="w-8 h-8 text-purple-500" />
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            Playlists
          </h1>
        </div>

        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          New playlist
        </button>
      </div>

      {/* Create Playlist Form */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[var(--card)] p-6 rounded-xl border border-gray-700 w-full max-w-md mx-4">
            <h2 className="text-xl font-bold text-[var(--foreground)] mb-4">
              Create New Playlist
            </h2>
            <input
              type="text"
              placeholder="Playlist name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              className="w-full p-3 bg-[var(--accent)] border border-gray-600 rounded-lg text-[var(--foreground)] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyDown={(e) => e.key === 'Enter' && createPlaylist()}
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={createPlaylist}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
              >
                Create
              </button>
              <button
                onClick={() => {
                  setShowCreateForm(false);
                  setNewPlaylistName("");
                }}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      {playlists.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <Library className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">
            No playlists yet
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Create playlists to organize your favorite videos
          </p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Create Your First Playlist
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-[var(--card)] rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group"
            >
              {/* Playlist Cover */}
              <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center relative">
                {playlist.videos?.length > 0 ? (
                  <div className="grid grid-cols-2 gap-1 p-2 w-full h-full">
                    {playlist.videos.slice(0, 4).map((video, index) => (
                      <img
                        key={index}
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover rounded"
                      />
                    ))}
                  </div>
                ) : (
                  <Library className="w-16 h-16 text-white opacity-70" />
                )}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-30">
                  <PlayCircle className="w-12 h-12 text-white" />
                </div>

                {/* Action Buttons */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  <button
                    onClick={() => deletePlaylist(playlist.id)}
                    className="p-2 bg-black bg-opacity-70 hover:bg-red-600 rounded-full transition-colors"
                    title="Delete playlist"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              {/* Playlist Info */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2">
                  {playlist.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {playlist.videos?.length || 0} video{playlist.videos?.length !== 1 ? 's' : ''}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Created on {new Date(playlist.createdAt).toLocaleDateString('en-US')}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      {playlists.length > 0 && (
        <div className="mt-8 px-4">
          <div className="bg-[var(--card)] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-2">
              <Library className="w-6 h-6 text-purple-500" />
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                You have {playlists.length} playlist{playlists.length !== 1 ? 's' : ''}
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              {playlists.reduce((total, playlist) => total + (playlist.videos?.length || 0), 0)} videos across all playlists
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Page;
