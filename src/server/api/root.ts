import { createTRPCRouter } from "~/server/api/trpc";
import { postsRouter } from "./routers/posts";
import { profileRouter } from "./routers/profile";
import { threadsRouter } from "./routers/threads";
import { flairsRouter } from "./routers/flairs";
import { reactionsRouter } from "./routers/reactions";

export const appRouter = createTRPCRouter({
  posts: postsRouter,
  flairs: flairsRouter,
  reactions: reactionsRouter,
  profiles: profileRouter,
  threads: threadsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
