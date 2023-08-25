// RULES:
// All filenames and component names from the specification are correctly included.
// All input args for components are as specified in the specification
// END RULES

// React imports
import React, { useState } from "react";

// Project imports

// Gradient
// Always include this component.
import Gradient from "./landingPageComponents/Gradient";

// image component imports go here
// Always assume the images will be in ./assets/images
// An example is:
// import imageName from "./assets/images/imageFileName.png";

// Footer
// Always include this component
// Parameters: None
import Footer from "./landingPageComponents/Footer";

// Always include this import
import text from "assets/text/text.json";

// custom imports go here
// - Importantly, all custom components will end up in ./landingPageComponents/ so all custom imports should assume the file is located there
// - In comments above the import you should show example usage taking special note of the expected signature from the specification.

export default function Main() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* All pages have Gradient */}
      <Gradient />

      {/* Add chosen components here */}
      {/* End content sections here */}
      {/* All pages have a Footer */}
      <Footer />
    </div>
  );
}
