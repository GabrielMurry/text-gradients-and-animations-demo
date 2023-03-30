import React from "react";
import { RadialTextGradient } from "react-text-gradients-and-animations";

const RadialCodeTitle = ({
  shape,
  position,
  color1,
  color2,
  animate,
  animateDirection,
  animateDuration,
}) => {
  return (
    <div className="title-wrapper">
      <RadialTextGradient
        shape={shape}
        position={position}
        colors={[`${color1}`, `${color2}`]}
        animate={animate}
        animateDirection={animateDirection}
        animateDuration={animateDuration}
      >
        <div className="title-text">Text</div>
        <div className="title-gradients-and">Gradients and</div>
        <div className="title-animations-in">Animations in</div>
        <div className="title-react">React.</div>
      </RadialTextGradient>
    </div>
  );
};

export default RadialCodeTitle;
