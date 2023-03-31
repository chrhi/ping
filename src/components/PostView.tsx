import { useUser } from "@clerk/nextjs";
import { Post } from "@prisma/client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";

dayjs.extend(relativeTime);

export const PostView = ({ post }: { post: Post }) => {
  const { user } = useUser();

  let date = post.createdAt.toLocaleDateString();
  let time = post.createdAt.toLocaleTimeString();
  let fullDate = date + " " + time;
  let timeSince = dayjs(post.createdAt).fromNow();
  let username =
    "@" + post.authorId.substring(post.authorId.length - 6).toLowerCase();
  let postId = "#" + post.id.substring(post.id.length - 8).toLowerCase();

  let youText =
    user?.id === post.authorId ? (
      <span className="text-neutral-content">(you)</span>
    ) : (
      <></>
    );

  return (
    <div className="border-b border-base-300 p-4">
      <Link className="" href={`/post/${post.id}`}>
        <div className="flex flex-row gap-2 text-sm">
          <span className="text-secondary-content">
            {username} {youText}
          </span>
          {`·`}
          <div className="tooltip text-secondary-content" data-tip={fullDate}>
            <div className="">{timeSince}</div>
          </div>
          {`·`}
          <div className="text-secondary-content">{postId}</div>
        </div>
        <div className="text-lg text-primary-content">{post.content}</div>
      </Link>
    </div>
  );
};
