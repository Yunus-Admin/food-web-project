function slider() {
  //Slider
  const slides = document.querySelectorAll(".offer__slide"),
    slider = document.querySelector(".offer__slider"),
    prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    current = document.querySelector("#current"),
    total = document.querySelector("#total"),
    slidesWrapper = document.querySelector(".offer__slider-wrapper"),
    slidesField = document.querySelector(".slider__offer-inner"),
    width = window.getComputedStyle(slidesWrapper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = `${slides.length}`;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dotsArr = [];
  indicators.classList.add("carousel-indicators");

  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-index", i + 1);

    if (i === 0) {
      dot.style.opacity = "1";
    }
    indicators.append(dot);
    dotsArr.push(dot);
  }

  function currentSlide() {
    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function slidesFieldTransform() {
    slidesField.style.transform = `translateX(-${offset}px)`;
  }

  function changeDotOpacity() {
    dotsArr.forEach((dot) => (dot.style.opacity = "0.5"));
    dotsArr[slideIndex - 1].style.opacity = "1";
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  next.addEventListener("click", () => {
    if (offset === deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesFieldTransform();

    if (slideIndex === slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    currentSlide();
    changeDotOpacity();
  });

  prev.addEventListener("click", () => {
    if (offset === 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesFieldTransform();

    if (slideIndex === 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    currentSlide();
    changeDotOpacity();
  });

  dotsArr.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const getSliderIndex = e.target.getAttribute("data-slide-index");

      slideIndex = getSliderIndex;
      offset = deleteNotDigits(width) * (getSliderIndex - 1);

      slidesFieldTransform();
      currentSlide();
      changeDotOpacity();
    });
  });
}

module.exports = slider;
