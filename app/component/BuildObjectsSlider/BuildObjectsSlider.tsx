"use client";
import "./BuildObjectsSlider.scss";
import CartBuildObject from "../CartBuildObject/CartBuildObject";
import { BuiltObjectsData } from "../BuildObjects/types";

import dynamic from "next/dynamic";

// slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function BuildObjectsSlider({
  builtObjects,
}: {
  builtObjects: BuiltObjectsData[];
}) {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  const updateSlides = () => {
    const width = window.innerWidth;
    if (width < 915) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    } else if (width < 1360) {
      setSlidesToShow(2);
      setSlidesToScroll(2);
    } else {
      setSlidesToShow(3);
      setSlidesToScroll(3);
    }
  };

  useEffect(() => {
    updateSlides(); // выставляем сразу при монтировании
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    swipe: true,
    slidesToShow,
    slidesToScroll,
  };

  return (
    <section className="BuildObjectsSlider">
      <Slider {...settings}>
        {builtObjects.map((obj) => (
          <CartBuildObject key={obj.id} data={obj} />
        ))}
      </Slider>
    </section>
  );
}
