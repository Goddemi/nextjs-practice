import { useRouter } from "next/router";
import React from "react";

const BlogsFilter = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>This is Blog filter</h1>
    </div>
  );
};

export default BlogsFilter;
