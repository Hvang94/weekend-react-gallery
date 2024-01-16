import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";

function App() {
  const [galleryItems, setGallaryItems] = useState([]);

  const fetchImage = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        console.log("GET response good");
        console.log(respons.data);
        setGallaryItems(response.data)
      })
      .catch((error) => {
        console.log("GET failed");
        console.log(error);
      });
  };

  const likeImage = (imageId) => {
    axios
      .put(`/api/gallary/${imageId}`)
      .then((response) => {
        fetchImage();
      })
      .catch((error) => {
        console.log("Error in PUT", error);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <Header />

      <p>The gallery goes here!</p>
      <img src="images/goat_small.jpg" />
      <button>Like</button>
    </div>
  );
}

export default App;
