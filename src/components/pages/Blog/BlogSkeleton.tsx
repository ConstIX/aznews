import React from "react"
import ContentLoader from "react-content-loader"

const BlogSkeleton: React.FC = () => (
   <ContentLoader
      speed={2}
      width={610}
      height={600}
      viewBox="0 0 610 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="blog_item"
   >
      <rect x="0" y="0" rx="6" ry="6" width="610" height="320" />
      <rect x="0" y="350" rx="6" ry="6" width="610" height="120" />
      <rect x="0" y="480" rx="6" ry="6" width="610" height="110" />
   </ContentLoader>
)




export default BlogSkeleton