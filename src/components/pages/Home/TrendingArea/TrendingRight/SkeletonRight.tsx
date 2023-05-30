import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonRight: React.FC = () => (
   <ContentLoader
      speed={2}
      width={380}
      height={110}
      viewBox="0 0 370 100"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="trand-right-single d-flex"
   >
      <rect x="141" y="0" rx="6" ry="6" width="230" height="100" />
      <rect x="0" y="0" rx="6" ry="6" width="120" height="100" />
   </ContentLoader>
)

export default SkeletonRight