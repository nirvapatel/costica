import React, { useState } from "react";

const Ourstory = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      <div className="block3">
        <div className="block3-inner">
          <div className="part1">
            <div className="part1-content">
              <h4>OUR STORY</h4>
              <span className="text-[20px] font-[600]">Our comprehensive innovation</span>
              <p>
                "Cosmetics are not just about vanity, but a form of self-expression, a way to feel confident and empowered. They are a gateway to unlocking one's inner beauty and celebrating diversity in beauty standards."
              </p>
            </div>
            <div className="part1-images">
              <div className="part1-image1">
                <img src="assets/image/bg-2.webp" alt="img-1-3_580x" />
              </div>
              <div className="part1-image2">
                <img src="assets/image/bg-3.webp" alt="img-1-4_580x" />
              </div>
            </div>
          </div>

          <div className={`part2 ${showVideo ? "rotate" : ""}`}>
            <div className="part2-image">
              {showVideo ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video Player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img src="assets/image/bg-1.webp" alt="img-1-5" />
                  <div className="icon_play" onClick={handlePlayClick}>
                    {/* SVG rotating text */}
                    <svg className="svg-text-circle" width="125" height="125" viewBox="0 0 125 125" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <path id="circlePath4" d="M 62.5, 62.5 m -31.25, 0 a 31.25,31.25 0 1,1 62.5,0 a 31.25,31.25 0 1,1 -62.5,0"></path>
                      </defs>
                      <circle cx="62.5" cy="62.5" r="31.25" fill="none"></circle>
                      <text fontSize="6" fill="white">
                        <textPath href="#circlePath4" textLength="196.3495">
                          Press play and immerse yourself in video!&nbsp;
                        </textPath>
                      </text>
                    </svg>
                    {/* Play Icon inside circle */}
                    <div className="play-icon">▶</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstory;