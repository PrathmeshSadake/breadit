import React, { FC } from "react";
import { ExtendedPost } from "@/types/db";

interface PostFeedProps {
  initialPosts: ExtendedPost[];
  subredditName?: string;
}

const PostFeed: FC<PostFeedProps> = ({ initialPosts, subredditName }) => {
  return <div>PostFeed</div>;
};

export default PostFeed;
