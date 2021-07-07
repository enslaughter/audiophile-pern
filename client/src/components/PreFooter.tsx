import React from "react";
import imgbestgear from "../assets/shared/mobile/image-best-gear.jpg";

function PreFooter() {
  return (
    <div className="prefooter-container">
      <div className="prefooter-image">
        <img src={imgbestgear} alt=""></img>
        <p>Bringing you the best audio gear</p>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}

export default PreFooter;