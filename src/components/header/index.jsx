import { FetchMostPopularVideos } from "@/Store/MostPopularVideosSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

function index() {
    const Videos = useSelector((state) => state.mostPopularVideosSlice.data);
    const error = useSelector((state) => state.mostPopularVideosSlice.data);
    const loading = useSelector((state) => state.mostPopularVideosSlice.data);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchMostPopularVideos())
    }, [])
    console.log(Videos);
    return (
        <div>
            
        </div>
    )
}

export default index
