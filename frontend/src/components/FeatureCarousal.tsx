import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const FeatureCarousel = () => {
  const features = [
    {
      title: "Real-time Text Translation:",
      description:
        "Instantly translates text from the screen region under the cursor using OCR and Google Translate API.SS",
    },
    {
      title: "Text-to-Speech Output:",
      description:
        "Converts translatedtext into speech for real-time audio feedback",
    },
    {
      title: "Object Detection with Audio Feedback",
      description:
        "Identifies objects in the region and announces them using text-to-speech.",
    },
    {
      title: "Customizable Language Support",
      description:
        "Supports various languages for translation and speech output.",
    },
  ];

  return (
    <div className="w-[20rem] mx-auto mt-10">
      <Carousel
        className=" bg-blue-200 h-[20rem] justify-center items-center py-14   "
        axis="horizontal"
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showIndicators={false}
        interval={2500}
        useKeyboardArrows={false}
        showThumbs={false}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className=" flex flex-col items-center py h-full justify-evenly  "
          >
            <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
            <p className="text-xl">{feature.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default FeatureCarousel;
