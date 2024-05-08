import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "First",
  },
};

interface Props {
  props: {};
}

export default function FirstPage({ props }: Props) {
  return <></>;
}
