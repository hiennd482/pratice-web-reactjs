import React, { useEffect, useState } from "react";
import "./product.scss";
function Product() {
  const [opent, setOpent] = useState(false);
  useEffect(() => {
    // const showScrollbars = (evt) => {
    //   // console.log("dang chay...");
    //   const el = evt.currentTarget;
    //   clearTimeout(el._scrolling); // Cancel pending class removal
    //   el.classList.add("is-scrolling"); // Add class
    //   el._scrolling = setTimeout(() => {
    //     // remove the scrolling class after 2500ms
    //     el.classList.remove("is-scrolling");
    //   }, 2500);
    //   // el.classList.add("animate-fadene");
    // };
    // document.querySelectorAll(".data-scrollbars").forEach((el) => {
    //   el.addEventListener("scroll", showScrollbars);
    // });
    // let slideIndex = 1;
    // showSlides(slideIndex);
    // const plusSlides=((n)=>{
    //   showSlides((slideIndex += n));
    // })
    // function currentSlide(n) {
    //   showSlides((slideIndex = n));
    // }
    // function showSlides(n) {
    //   let i;
    //   let slides = document.getElementsByClassName("mySlides");
    //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {
    //     slideIndex = 1;
    //   }
    //   if (n < 1) {
    //     slideIndex = slides.length;
    //   }
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].setAttribute("style", "display:none");
    //   }
    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex - 1].setAttribute();
    //   dots[slideIndex - 1].className += " active";
    // }
    // return(plusSlides(),currentSlide())
  });

  let slideIndex = 1;
  ShowSlides(slideIndex);
  const PlusSlides = (n) => {
    ShowSlides((slideIndex += n));
  };

  function CurrentSlide(n) {
    ShowSlides((slideIndex = n));
  }
  function ShowSlides() {
    useEffect((n) => {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      console.log("ahhaa1");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("taisao", "");
      }
      slides[slideIndex - 1].style.display = "block";
      console.log("ahhaa");
      dots[slideIndex - 1].className += "taisao";
    });
  }
  return (
    <div className="">
      <div class="slideshow-container">
        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img
            src="https://www.w3schools.com/howto/img_nature_wide.jpg"
            className="w-[100%]"
          />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 3</div>
          <img
            src="https://www.w3schools.com/howto/img_snow_wide.jpg"
            className="w-[100%]"
          />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 3</div>
          <img
            src="https://www.w3schools.com/howto/img_mountains_wide.jpg"
            className="w-[100%]"
          />
          <div class="text">Caption Three</div>
        </div>

        <a class="prev" onclick={() => PlusSlides(-1)}>
          ❮
        </a>
        <a class="next" onclick={() => PlusSlides(1)}>
          ❯
        </a>
      </div>

      <div className="text-center">
        <span class="dot" onclick={() => CurrentSlide(1)}></span>
        <span class="dot" onclick={() => CurrentSlide(2)}></span>
        <span class="dot" onclick={() => CurrentSlide(3)}></span>
      </div>
    </div>
  );
}

export default Product;
