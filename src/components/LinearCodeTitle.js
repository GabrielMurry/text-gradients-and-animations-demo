import React from "react";
import { LinearTextGradient } from "react-text-gradients-and-animations";

const LinearCodeTitle = ({
  angle,
  color1,
  color2,
  animate,
  animateDirection,
  animateDuration,
}) => {
  return (
    <div className="title-wrapper">
      <LinearTextGradient
        angle={angle}
        colors={[`${color1}`, `${color2}`]}
        animate={animate}
        animateDirection={animateDirection}
        animateDuration={animateDuration}
      >
        <div className="title-text">Text</div>
        <div className="title-gradients-and">Gradients and</div>
        <div className="title-animations-in">Animations in</div>
        <div className="title-react">React.</div>
      </LinearTextGradient>
    </div>
  );
};

export default LinearCodeTitle;
