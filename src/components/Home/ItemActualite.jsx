import React from "react";

const ItemActualite = ({ post }) => {
  return (
    <div className="swiper-slide">
      <article className="card mx-2">
        <div className="post-img">
          <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
        </div>

        <p className="post-category">
          {post.categories.map((cat) => cat.title).join(",")}
        </p>

        <h2 className="title">
          <a href="blog-details.html">{post.title}</a>
        </h2>
        <p className="preview">
          {post.body.split(" ").length <= 30
            ? post.body
            : `${post.body.split(" ").slice(0, 30).join(" ")}...`}
        </p>

        <div className="d-flex align-items-center">
          <img
            src="assets/img/blog/blog-author.jpg"
            alt=""
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">Maria Doe</p>
            <p className="post-date">
              <time dateTime="2022-01-01">Jan 1, 2022</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemActualite;
