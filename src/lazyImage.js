import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Image } from "./styles";
const registerObserver = (ref, setShowImage) => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      setShowImage(true);
      console.log("hii");
      observer.disconnect();
    });
  });
  observer.observe(ref);
};

export default function LazyImage({ styleClass, src, alt }) {
  const [showImage, setShowImage] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    registerObserver(imageRef.current, setShowImage);
  }, []);

  if (showImage) {
    return <Image className={styleClass} src={src} alt={alt} />;
  }
  return (
    <div
      style={{ height: "250px", width: "200px", padding: "10px" }}
      ref={imageRef}
      className={styleClass}
    ></div>
  );
}
