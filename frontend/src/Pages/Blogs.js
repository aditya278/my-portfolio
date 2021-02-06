import React from "react";

import Title from "../Components/Title";
import allBlogs from "../data/allBlogs";

const Blogs = () => {
  return (
    <>
    <Title title={'Blogs'} span={'Blogs'} />
    <div className="BlogsPage">
      {
        allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt="" />
                <a href={blog.link} className="blog-link">{blog.title}</a>
                <div className="blog-date">
                  <p>
                    Published: {blog.date + "/" + blog.month + "/" + blog.year}
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  );
};

export default Blogs;