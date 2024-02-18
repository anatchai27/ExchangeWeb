import React from "react";

export const Overlays = () => {
  return (
    <>
      <div id="overlayer">
        <div className="loader-overlay">
          <div className="dm-spin-dots spin-lg">
            <span className="spin-dot badge-dot dot-primary" />
            <span className="spin-dot badge-dot dot-primary" />
            <span className="spin-dot badge-dot dot-primary" />
            <span className="spin-dot badge-dot dot-primary" />
          </div>
        </div>
      </div>
      <div className="overlay-dark-sidebar" />
      <div className="customizer-overlay" />
    </>
  );
};
