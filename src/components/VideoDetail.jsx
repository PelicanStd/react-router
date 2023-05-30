import { useParams } from 'react-router-dom'

export default function VideoDetail() {
  const { videoId} = useParams();
  console.log(videoId)
  return(
    <div className={'text-[80px] text-amber-950'}>
      VideoDetail {videoId}
    </div>
  )
}