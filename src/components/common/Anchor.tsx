import React from "react";

type Props = {
  id: string;
};

export default function Anchor({ id }: Props) {
  return <div id={id} className="absolute p-5 mt-[-65px]" />;
}
