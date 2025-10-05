"use client";
import "./BuildObjectsSlider.scss";
import CartBuildObject from "../CartBuildObject/CartBuildObject";
import { BuiltObjectsData } from "../BuildObjects/types";

import dynamic from "next/dynamic";

// slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BuildObjectsSlider({
  builtObjects,
}: {
  builtObjects: BuiltObjectsData[];
}) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 915,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
