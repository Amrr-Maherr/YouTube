"use client"
import VideoDetailsSkeleton from '@/components/LoadingSkeleton/VideoDetailsSkeleton';
import { FetchRelatedVideos } from '@/Store/RelatedVideosSlice';
import { FetchVideoDetails } from '@/Store/VideoDetailsSlice';
import { useParams } from 'next/navigation'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function page() {
    const { id } = useParams()
    const videoDetails = useSelector((state) => state.VideoDetails.data);
    const RelatedVideos = useSelector((state) => state.RelatedVideos.data);
    const loading = useSelector((state) => state.VideoDetails.loading);
    const error = useSelector((state) => state.VideoDetails.error);
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(FetchVideoDetails(id))
            dispatch(FetchRelatedVideos(id))
        }
    }, [id, dispatch])
    console.log(videoDetails);
    console.log(RelatedVideos);
    if (!loading) {
        return <VideoDetailsSkeleton />;
    }
    return (
        <div>
            
        </div>
    )
}

export default page
