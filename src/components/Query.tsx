"use client";

import { usePost } from "@/hooks/use-posts";
import { FC } from "react";

interface QueryProps {}

const Query: FC<QueryProps> = ({}) => {
  const { data } = usePost();

  return <div>{JSON.stringify(data)}</div>;
};

export default Query;
