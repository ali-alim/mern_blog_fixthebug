import "./post.css";

function Post() {
  return (
      <div className="post">
        <img
          className="postImg"
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="post_image"
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          excepturi nisi dolorum debitis quis, totam ex cupiditate! Porro odio,
          omnis dolores qui reprehenderit quod ipsam enim tempore minima, beatae
          voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestias excepturi nisi dolorum debitis quis, totam ex cupiditate!
          Porro odio, omnis dolores qui reprehenderit quod ipsam enim tempore
          minima, beatae voluptas. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Molestias excepturi nisi dolorum debitis quis, totam
          ex cupiditate! Porro odio, omnis dolores qui reprehenderit quod ipsam
          enim tempore minima, beatae voluptas.
        </p>
      </div>
  );
}

export default Post;
