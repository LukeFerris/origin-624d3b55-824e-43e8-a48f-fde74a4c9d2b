// React imports
import React from "react";

// Project imports
import text from "assets/text/text.json";

// Gradient
import Gradient from "./landingPageComponents/Gradient";

// Footer
import Footer from "./landingPageComponents/Footer";

// HeroStandard
import HeroStandard from "./landingPageComponents/HeroStandard";
import heroImage from "./assets/images/heroImage.png";

// TicTacToe
import TicTacToe from "./landingPageComponents/TicTacToe";

export default function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* All pages have Gradient */}
      <Gradient />

      {/* HeroStandard component with the correct input arguments */}
      {/* mainHeading: 1-4 words */}
      {/* subHeading: 30-50 words that act as a page description */}
      {/* imageAltTag: Detailed alt text for the image, should contain the keywords '4K photo shoot' and the dimensions width: 1600px and height: 1400px */}
      <HeroStandard 
        mainHeading={text.Main.mainHeading.content} 
        subHeading={text.Main.subHeading.content} 
        imageSrc={heroImage} 
        imageAltTag={text.Main.imageAltTag.content}
      />

      {/* TicTacToe component */}
      <TicTacToe />

      {/* All pages have a Footer */}
      <Footer />
    </div>
  );
}