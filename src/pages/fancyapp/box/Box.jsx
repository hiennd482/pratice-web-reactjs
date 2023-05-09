import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./index.scss";
function Box() {
  useEffect(() => {
    // document
    //   .querySelector(".f-button")
    //   .setAttribute("id", new Date().getTime());
    Fancybox.bind('[data-fancybox="gallery"]', {
      //
      Carousel: {
        Navigation: {
          classes: {
            button: "f-button box",
            isNext: "is-next b",
            isPrev: "is-prev b",
          },
          nextTpl: `<svg fill="red" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
            `,
          prevTpl: `<svg fill="red" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
            `,
        },
      },
      Toolbar: {
        items: {
          infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1">page<span data-fancybox-current-index></span>/page<span data-fancybox-count></span></div>',
          },
          slideshow: {
            tpl: `<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg></button>`,
          },
          thumbs: {
            tpl: `<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg></button>`,
          },
          fullscreen: {
            tpl: `<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg></button>`,
          },
        },
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "thumbs", "fullscreen", "close"],
        },
      },
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
