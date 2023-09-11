import React, { useState } from "react";
import { arrayBlogsInit } from "./Blogs";

const Blogs = () => {
  const [nameBlog, setNameBlog] = useState("");
  const [arrayBlogs, setArrayBlog] = useState(arrayBlogsInit);
  const handelAddBlog = (e) => {
    console.log("check");
    e.PreventDefault();
    setArrayBlog([
      ...arrayBlogs,
      { name: nameBlog, id: Math.random().toString() },
    ]);
    const onChangeInput = (event) => {
      setNameBlog(event.target.value);
    };

    return (
      <div className="blogs">
        <div className="container-blogs">
          <div className="add-blog">
            <form>
              <input
                type="text"
                value=""
                onChange={onChangeInput}
                placeholder="moi ban nhap ten blog"
              />

              <button type="submit" onClick={handelAddBlog}>
                Add
              </button>
            </form>
          </div>
          {arrayBlogs.map((item, index) => {
            return <div key={index}>{item.name}</div>;
          })}
        </div>
      </div>
    );
  };

  export default Blogs;
};
