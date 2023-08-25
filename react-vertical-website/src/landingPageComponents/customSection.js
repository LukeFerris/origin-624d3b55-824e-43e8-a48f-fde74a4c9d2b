// RULES:
// There are no placeholders for missing logic or UI. The code is fully functional to meet the specification without further work.
// All acceptance criteria mentioned in the specification are met
// Elements are not touching each other - they have margin separating them of 15px where required.
// The component is self contained with no props required.
// The text is black.
// END RULES

// Always worth including React
import React, { useState } from "react";

// Always include this import
// Never remove it, it is required for text processing
import text from "assets/text/text.json";

// images imports
// If an image is present on the page, it should be imported using the CreateReactApp approach, an example of which is shown below.
// Always assume the images will be in ./assets/images
// An example is:
// import imageName from "./assets/images/imageFileName.png";

export default function CustomSectionName() {
  // you may add javascript here
  // end javascript zone

  return (
    // the styles in this div should not be udpated
    // under no circumstances should you change the styling in this div
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: "60px",
      }}
    >
      {/* This div makes the left hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
      <div>{/* You may only add UI content within this div */}</div>
      {/* This div makes the right hand border and should remain */}
      <div style={{ flexBasis: "30vw", minWidth: "5vw" }}></div>
    </div>
  );
}
