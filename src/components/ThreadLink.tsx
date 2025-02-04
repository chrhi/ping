import Link from "next/link";
import { type PropsWithChildren } from "react";

export const ThreadLink = (props: PropsWithChildren & { thread: string }) => {
  return <Link href={`/t/${props.thread}`}>{props.children}</Link>;
};

export const ChatLink = (props: PropsWithChildren & { chat: string }) => {
  return <Link href={`/c/${props.chat}`}>{props.children}</Link>;
};
