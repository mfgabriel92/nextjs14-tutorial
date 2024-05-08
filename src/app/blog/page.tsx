import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

interface Props {
  props: {};
}

export default function BlogPage({ props }: Props) {
  return <h1>Blog page</h1>;
}
