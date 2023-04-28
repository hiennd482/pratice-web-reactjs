import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./index.scss";
function Box() {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {
      //
    });
  });
  return (
    <div>
      {" "}
      <div className="flex">
        <a
          data-fancybox="gallery"
          href="https://lipsum.app/id/2/1600x1200"
          data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
        >
          <img
            src="https://lipsum.app/id/2/200x150"
            width="200"
            height="150"
            alt=""
          />
        </a>

        <a data-fancybox="gallery" href="https://lipsum.app/id/3/1600x1200">
          <img
            src="https://lipsum.app/id/3/200x150"
            width="200"
            height="150"
            alt=""
          />
        </a>

        <a data-fancybox="gallery" href="https://lipsum.app/id/4/1600x1200">
          <img
            src="https://lipsum.app/id/4/200x150"
            width="200"
            height="150"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Box;
