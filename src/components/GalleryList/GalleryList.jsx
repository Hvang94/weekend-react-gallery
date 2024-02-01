import React, { useState, useEffect } from "react";
import axios from "axios";
import { GalleryItem } from "../GalleryItem/GalleryItem";

export const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        setGallery(response.data);
      })
      .catch((error) => {
        console.log("GET failed");
        console.log(error);
      });
  };

  return (
    <div data-testid="galleryList">
      {gallery.map((item) => (
        <div key={item.id} data-testid="galleryList">
          <GalleryItem item={item} fetchImage={fetchImage} data-testid="galleryList" />
        </div>
      ))}
    </div>
  );
};