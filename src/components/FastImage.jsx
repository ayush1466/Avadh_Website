import { useState } from "react";

export default function FastImage({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#eaeaea",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        className={className}
      />
    </div>
  );
}
