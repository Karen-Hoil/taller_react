import React from "react";

export default function Footer() {
  return (
    <>
      <div
        className="fixed bottom-0 left-0 bg-blue-800 w-60 h-60 rounded-full mx-auto"
        style={{
          position: "fixed",
          bottom: "-120px",
          left: "9%",
          transform: "translateX(-50%)",
          overflow: "visible",
        }}
      ></div>
    </>
  );
}
