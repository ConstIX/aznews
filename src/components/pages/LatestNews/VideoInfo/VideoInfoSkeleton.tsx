import React from "react"
import ContentLoader from "react-content-loader"

const VideoInfoSkeleton: React.FC = () => (
   <ContentLoader
      speed={2}
      width={570}
      height={227}
      viewBox="0 0 570 227"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="single-video"

   >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
      <rect x="0" y="0" rx="6" ry="6" width="570" height="190" />
      <rect x="0" y="197" rx="6" ry="6" width="570" height="28" />
   </ContentLoader>
)

export default VideoInfoSkeleton