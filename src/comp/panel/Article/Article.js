import { useState, useMemo } from "react";
import "./Article.css";
import ImageTitle from "../ImageTitle/ImageTitle.js";
import Image from "../Image/Image.js";
import ImageText from "../ImageText/ImageText.js";
import { useInView } from "react-intersection-observer";

const Article = ({ scrollLeft, src, title, description }) => {
  const [showText, setShowText] = useState(false);
  const toggleShowText = () => {
    setShowText((prev) => !prev);
  };


  const { ref, inView } = useInView({
    threshold: 0.5, // trigger when element is at least 50% visible
    triggerOnce: true, // only trigger once
  });



  return (
    <>
      <div
        ref={ref}
        className="article"
        
      >
        <div
          className="article__main"
         
        >
          {title ? (
            <ImageTitle
              title={title}
              toggleShowText={toggleShowText}
              showText={showText}
              description={description}
            />
          ) : null}
          <Image src={src} />
        </div>

        {description ? (
          <ImageText
            showText={showText}
            description={description}
          />
        ) : null}
      </div>
    </>
  );
};

export default Article;
