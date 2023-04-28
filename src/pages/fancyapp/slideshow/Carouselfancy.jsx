import React, { useEffect } from "react";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./index.scss";
function Carouselfancy() {
  useEffect(() => {
    const container = document.getElementById("myCarousel");
    const options = {
      Dots: false,
      Thumbs: {
        type: "modern",
      },
    };

    new Carousel(container, options, { Thumbs });
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
