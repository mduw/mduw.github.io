import React, { useEffect, useState } from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="go-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <ArrowDropUpIcon
            style={{ margin: 0, padding: 0, fontSize: "8vw", color: "#300b51" }}
          />
        </div>
      )}
    </div>
  );
}
