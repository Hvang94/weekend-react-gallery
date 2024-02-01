// GalleryItem.js
import { useState } from "react";
import axios from "axios";

export const GalleryItem = ({ item, fetchImage }) => {
  const [showImage, setShowImage] = useState(true);
  const [likes, setLikes] = useState(item.likes);

  const handleLike = () => {
    axios
      .put(`/api/gallery/like/${item.id}`)
      .then(() => {
        setLikes(likes + 1);
      })
      .catch((error) => {
        console.log("PUT failed");
        console.log(error);
      });
  };

  return (
    <div data-testid="galleryItem">
      <h3>{item.title}</h3>
      {showImage ? (
        <img
          src={item.url}
          alt={item.description}
          onClick={() => setShowImage(!showImage)}
          data-testid="toggle"
        />
      ) : (
        <p onClick={() => setShowImage(!showImage)} data-testid="toggle">
          {item.description}
        </p>
      )}

      <p>Likes: {likes}</p>
      <button data-testid="like" onClick={handleLike}>
        Like
      </button>
    </div>
  );
};
