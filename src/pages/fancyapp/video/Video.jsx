import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Video() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      //
    });
  });
  return (
    <div className="flex">
      <p className="flex">
        <a href="https://youtu.be/syfWkzvl8CA" data-fancybox="video-gallery">
          <img
            alt=""
            width="200"
            src="http://i3.ytimg.com/vi/tHnwV5ay8-8/hqdefault.jpg"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=QLQ3sLSrfwI"
          data-fancybox="video-gallery"
        >
          <img
            alt=""
            width="200"
            src="http://i3.ytimg.com/vi/QLQ3sLSrfwI/hqdefault.jpg"
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=UFHscDioNWQ"
          data-fancybox="video-gallery"
        >
          <img
            alt=""
            width="200"
            src="http://i3.ytimg.com/vi/UFHscDioNWQ/hqdefault.jpg"
          />
        </a>
      </p>
    </div>
  );
}

export default Video;
