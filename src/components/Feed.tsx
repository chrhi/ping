import { RouterOutputs } from "~/utils/api";
import { PostView } from "./PostView";
import { Post } from "@prisma/client";

export type PostWithUser = RouterOutputs["posts"]["getAll"][number]

export default function Feed(props: {
  data?: PostWithUser[];
  isLoading?: boolean;
  isError?: boolean;
}) {
  if (props.isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center ">
        <div className="loading btn"> loading...</div>
      </div>
    );

  if (props.isError || !props.data)
    return (
      <div className="btn-error btn">
        something went wrong... terribly wrong...
      </div>
    );

  let feed = props.data.map((post) => <PostView key={post.post.id} post={post} />);

  return (
    <>
      {feed}
    </>
  );
}
