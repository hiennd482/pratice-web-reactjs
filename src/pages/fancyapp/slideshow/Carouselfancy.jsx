import React, { useEffect } from "react";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./carousel.scss";
function Carouselfancy() {
  useEffect(() => {
    const container = document.getElementById("myCarousel");
    // document.body.classList.add("hihi");
    // function tet() {
    // document.querySelector("#root").classList.add("alo");
    // container.classList.add("alo");
    // }f-thumbs__track
    // var element = document.querySelector(".f-button is-next");
    // element.setAttribute("id", "hh");
    // document.querySelector(".is-prev").setAttribute("id", new Date().getTime());
    // document.querySelector(".is-next").setAttribute("id", new Date().getTime());

    // var setId = document.getElementById("root");
    // setId.setAttribute("id", "hh");
    const options = {
      Dots: false,
      Thumbs: {
        type: "modern",
      },
      Navigation: {
        classes: {
          button: "f-button dd",
          isNext: "is-next",
          isPrev: "is-prev",
        },
        nextTpl: `<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
      </svg>
        `,
        prevTpl: `<svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
      </svg>
        `,
      },
    };

    new Carousel(container, options, { Thumbs });
    return () => {};
  });

  return (
    <div>
      <div class="f-carousel" id="myCarousel">
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/31/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/31/640x480"
          />
        </div>
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/35/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/35/640x480"
          />
        </div>
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/34/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/34/640x480"
          />
        </div>
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/60/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/60/640x480"
          />
        </div>
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/33/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/33/640x480"
          />
        </div>
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/59/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/59/640x480"
          />
        </div>
        <div
          class="f-carousel__slide"
          data-thumb-src="https://lipsum.app/id/37/192x144"
        >
          <img
            width="640"
            height="480"
            alt=""
            data-lazy-src="https://lipsum.app/id/37/640x480"
          />
        </div>
      </div>
    </div>
  );
}

export default Carouselfancy;
