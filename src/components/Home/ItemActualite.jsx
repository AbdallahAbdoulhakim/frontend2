import React from "react";
import { format } from "date-fns";

const ItemActualite = ({ post }) => {
  return (
    <div className="swiper-slide">
      <article className="card mx-2">
        <div className="post-img">
          <img
            src={`${process.env.PUBLIC_URL}/uploads/${post.imgUrls[0]}`}
            alt={`${post.title}, illustration.`}
            className="img-fluid"
          />
        </div>

        <p className="post-category">
          <a href="/">{post.categories[0].title}</a>
        </p>

        <h2 className="title">
          <a href={`/blog/article/${post.id}`}>{post.title}</a>
        </h2>
        <p className="preview">
          {post.body.split(" ").length <= 30
            ? post.body
            : `${post.body.split(" ").slice(0, 30).join(" ")}...`}
        </p>

        <div className="d-flex align-items-center">
          <img
            src={`${process.env.PUBLIC_URL}/uploads/${post.author.imageUrl}`}
            alt={`${post.author.firstname} ${post.author.lastname}`}
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author">{`${post.author.firstname} ${post.author.lastname}`}</p>
            <p className="post-date">
              <time dateTime={format(post.createdAt, "yyyy-MM-dd")}>
                {format(post.createdAt, "d MMM, yyyy")}
              </time>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ItemActualite;
