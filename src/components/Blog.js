import React from "react";
import { blogs } from "../data/data";
import BlogItem from "./BlogItem";
import Title from "./Title";

const Blog = () => {
  return (
    <section className="wrapper pt-10" id="blog">
      <Title
        title="My Article"
        description="I am not a very good writer and very weak in English. But, I tried to write some blogs in what English I know. Here are some of my blogs:"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {blogs.map((blog) => (
          <BlogItem {...blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
