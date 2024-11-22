import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/icons/TuneUp_Favicon.png";
import Icon1 from "../assets/icons/32.svg";
import Icon2 from "../assets/icons/33.svg";
import Icon3 from "../assets/icons/34.svg";
import Icon4 from "../assets/icons/35.svg";
import Icon5 from "../assets/icons/36.svg";
import Icon6 from "../assets/icons/37.svg";
import Icon7 from "../assets/icons/38.svg";
import Icon8 from "../assets/icons/39.svg";
import Icon9 from "../assets/icons/40.svg";
import Icon10 from "../assets/icons/41.svg";

const pathData = [
  "M0,0 C400,504 1200,504 1590,0",
  "M0,100 C400,476 1200,476 1590,100",
  "M0,200 C400,448 1200,448 1590,200",
  "M0,300 C400,420 1200,420 1590,300",
  "M0,370 C400,402 1200,402 1590,370",
  "M0,430 C400,387 1200,387 1590,430",
  "M0,500 C400,369 1200,369 1590,500",
  "M0,600 C400,341 1200,341 1590,600",
  "M0,700 C400,313 1200,313 1590,700",
  "M0,800 C400,285 1200,285 1590,800",
];

const iconUrls = [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
];

const AnimatedPath: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [pathLengths, setPathLengths] = useState<number[]>([]);

  useEffect(() => {
    if (svgRef.current) {
      const lengths = pathData.map((_, index) => {
        const path = svgRef.current?.querySelector(
          `#path-${index}`
        ) as SVGPathElement;
        return path?.getTotalLength() || 0;
      });
      setPathLengths(lengths);
    }
  }, []);

  return (
    <div className="animation-container bg-[#021734] min-h-[1000px] relative">
      <p className="text-[58px] text-white w-[700px] mx-auto text-center leading-[60px] pt-20 inter-medium">
        Why can you choose us to TuneUp yourself
      </p>
      <p className="w-[600px] text-center mt-10 text-white mx-auto text-opacity-70">
        Code-first synthetic monitoring for modern DevOps. Monitor your APIs and
        apps at a fraction of the price of legacy providers. Powered by
        Monitoring as Code and Playwright.
      </p>
      <svg
        ref={svgRef}
        width="100%"
        height="1000px"
        viewBox="0 0 1590 1000"
        xmlns="http://www.w3.org/2000/svg"
        className="scale-[0.95] -mt-10"
      >
        {/* Define gradients */}
        <defs>
          {pathData.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`gradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#021734" />
              <stop offset="20%" stopColor="#2676c9" />
              <stop offset="50%" stopColor="#3886d7" />
              <stop offset="80%" stopColor="#2676c9" />
              <stop offset="100%" stopColor="#021734" />
            </linearGradient>
          ))}

          {/* Shadow filter for the logo */}
          <filter
            id="shadow-filter"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="25"
              floodColor="#000000"
              floodOpacity="1"
            />
          </filter>
        </defs>

        {/* Draw the paths first */}
        {pathData.map((path, index) => (
          <path
            key={`path-${index}`}
            id={`path-${index}`}
            d={path}
            fill="transparent"
            stroke={`url(#gradient-${index})`}
            strokeWidth="2.5"
          />
        ))}

        {/* Render icons on top of paths with a gap */}
        {pathData.map((_, index) => (
          <g key={`icon-${index}`}>
            <image
              href={iconUrls[index % iconUrls.length]}
              width="90"
              height="90"
            >
              {pathLengths.length > 0 && (
                <>
                  <animateMotion
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                    rotate="auto"
                  >
                    <mpath href={`#path-${index}`} />
                  </animateMotion>

                  {/* Animate the image width */}
                  <animate
                    attributeName="width"
                    values="90;30;90"
                    keyTimes="0;0.5;1"
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                  />

                  {/* Animate the height synchronously */}
                  <animate
                    attributeName="height"
                    values="90;30;90"
                    keyTimes="0;0.5;1"
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                  />

                  {/* Adjust vertical position of the images */}
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 -45; 0 -15; 0 -45"
                    keyTimes="0;0.5;1"
                    dur="30s"
                    repeatCount="indefinite"
                    begin={`${index * 3}s`}
                  />
                </>
              )}
            </image>
          </g>
        ))}

        {/* Add logo at the center */}
        <image
          href={Logo} // Replace with your logo URL
          width="120"
          height="120"
          x="725" // Adjust the x position to center horizontally
          y="336" // Adjust the y position to center vertically
          className="z-[99999]" // Ensures the logo is above everything
          style={{ pointerEvents: "none" }} // Prevent interactions with the logo
          filter="url(#shadow-filter)"
        />
      </svg>
    </div>
  );
};

export default AnimatedPath;
