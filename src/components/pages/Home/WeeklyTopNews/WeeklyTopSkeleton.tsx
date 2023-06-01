import React from "react"
import ContentLoader from "react-content-loader"

const WeeklyTopSkeleton: React.FC = () => (
   <ContentLoader
      speed={2}
      width={204}
      height={285}
      viewBox="0 0 204 285"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="weekly2-single"
   >
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
      <rect x="0" y="0" rx="6" ry="6" width="204" height="131" />
      <rect x="0" y="140" rx="6" ry="6" width="204" height="15" />
      <rect x="0" y="168" rx="6" ry="6" width="204" height="108" />
   </ContentLoader>
)

export default WeeklyTopSkeleton