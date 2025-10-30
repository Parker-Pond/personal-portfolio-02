import React, { useState } from "react";
import "./flip-box.css";

interface FlipBoxProps {
  frontContent?: string;
  frontColor?: string;
  backColor?: string;
  children?: React.ReactNode;
}

function Flip_box({ frontContent = "add something here on the front", frontColor="red",backColor="green", children }: FlipBoxProps) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div className={`flip_box${flipped ? " flipped" : ""}`} onClick={handleFlip}>
      <div className="inner">
        <div className="front" style={{ backgroundColor: frontColor }}>{frontContent}</div>
        <div className="back" style={{ backgroundColor: backColor }}>{children}</div>
      </div>
    </div>
  );
}

export default Flip_box;