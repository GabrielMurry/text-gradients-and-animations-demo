import React, { useEffect, useRef, useState } from "react";
import LinearCodeTitle from "./LinearCodeTitle";
import LinearCodeBlock from "./LinearCodeBlock";
import LinearInputs from "./LinearInputs";
import RadialCodeTitle from "./RadialCodeTitle";
import RadialCodeBlock from "./RadialCodeBlock";
import RadialInputs from "./RadialInputs";
import ConicCodeTitle from "./ConicCodeTitle";
import ConicCodeBlock from "./ConicCodeBlock";
import ConicInputs from "./ConicInputs";
import SelectGradients from "./SelectGradients";
import Description from "./Description";
import NpmGithubLinks from "./NpmGithubLinks";

const Home = () => {
  const timer = useRef(null);
  const [angle, setAngle] = useState(
    JSON.parse(localStorage.getItem("storedAngle")) || 0
  );
  const [shape, setShape] = useState(
    JSON.parse(localStorage.getItem("storedShape")) || "circle"
  );
  const [position, setPosition] = useState(
    JSON.parse(localStorage.getItem("storedPosition")) || "center"
  );
  const [color1, setColor1] = useState(
    JSON.parse(localStorage.getItem("storedColor1")) || "#37d67a"
  );
  const [color2, setColor2] = useState(
    JSON.parse(localStorage.getItem("storedColor2")) || "#0000FF"
  );
  const [selectedColor, setSelectedColor] = useState();
  const [displayColorPicker, setColorPicker] = useState(false);
  const [animate, setAnimate] = useState(
    JSON.parse(localStorage.getItem("storedAnimate")) || false
  );
  const [animateDirection, setAnimateDirection] = useState(
    JSON.parse(localStorage.getItem("storedAnimateDirection")) || "vertical"
  );
  const [animateDuration, setAnimateDuration] = useState(
    JSON.parse(localStorage.getItem("storedAnimateDuration")) || 5
  );
  const [highlight, setHighlight] = useState({
    angle: false,
    shape: false,
    position: false,
    color1: false,
    color2: false,
    animate: false,
    animateDirection: false,
    animateDuration: false,
  });
  const [gradient, setGradient] = useState(
    JSON.parse(localStorage.getItem("storedGradient")) || "linear"
  );

  const refresh = () => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: false,
    }));
    window.location.reload(true);
  };

  const directionOptions = [
    { value: "vertical", label: "Vertical" },
    { value: "horizontal", label: "Horizontal" },
    { value: "diagonal", label: "Diagonal" },
  ];

  const shapeOptions = [
    { value: "circle", label: "Circle" },
    { value: "ellipse", label: "Ellipse" },
  ];

  const positionOptions = [
    { value: "center", label: "Center" },
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
    { value: "top", label: "Top" },
    { value: "bottom", label: "Bottom" },
  ];

  const incrementAngle = () => {
    setHighlight((prev) => ({
      ...prev,
      angle: true,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: false,
    }));
    timer.current = setInterval(() => setAngle((prev) => prev + 1), 100);
  };

  const decrementAngle = () => {
    setHighlight((prev) => ({
      ...prev,
      angle: true,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: false,
    }));
    timer.current = setInterval(() => setAngle((prev) => prev - 1), 100);
  };

  const incrementDuration = () => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: true,
    }));
    timer.current = setInterval(
      () => setAnimateDuration((prev) => prev + 1),
      100
    );
  };

  const decrementDuration = () => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: true,
    }));
    timer.current = setInterval(
      () => setAnimateDuration((prev) => prev - 1),
      100
    );
  };

  function timeoutClear() {
    clearInterval(timer.current);
  }

  const handleSwatchClick = (str) => {
    setSelectedColor(str);
    setColorPicker((prev) => !prev);
  };

  const handleSketchChange = (color) => {
    if (selectedColor === "color1") {
      setHighlight((prev) => ({
        ...prev,
        angle: false,
        shape: false,
        position: false,
        color1: true,
        color2: false,
        animate: false,
        animateDirection: false,
        animateDuration: false,
      }));
      setColor1(color.hex);
    } else if (selectedColor === "color2") {
      setHighlight((prev) => ({
        ...prev,
        angle: false,
        shape: false,
        position: false,
        color1: false,
        color2: true,
        animate: false,
        animateDirection: false,
        animateDuration: false,
      }));
      setColor2(color.hex);
    }
  };

  const handleAnimateClick = (doAnimate) => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: true,
      animateDirection: false,
      animateDuration: false,
    }));
    setAnimate(doAnimate);
  };

  const handleShapeChange = (e) => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: true,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: false,
    }));
    setShape(e.value);
  };

  const handlePositionChange = (e) => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: false,
      position: true,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: false,
      animateDuration: false,
    }));
    setPosition(e.value);
  };

  const handleDirectionChange = (e) => {
    setHighlight((prev) => ({
      ...prev,
      angle: false,
      shape: false,
      position: false,
      color1: false,
      color2: false,
      animate: false,
      animateDirection: true,
      animateDuration: false,
    }));
    setAnimateDirection(e.value);
  };

  useEffect(() => {
    localStorage.setItem("storedGradient", JSON.stringify(gradient));
    localStorage.setItem("storedAngle", JSON.stringify(angle));
    localStorage.setItem("storedShape", JSON.stringify(shape));
    localStorage.setItem("storedPosition", JSON.stringify(position));
    localStorage.setItem("storedColor1", JSON.stringify(color1));
    localStorage.setItem("storedColor2", JSON.stringify(color2));
    localStorage.setItem("storedAnimate", animate);
    localStorage.setItem(
      "storedAnimateDirection",
      JSON.stringify(animateDirection)
    );
    localStorage.setItem("storedAnimateDuration", animateDuration);
  }, [
    gradient,
    angle,
    shape,
    position,
    color1,
    color2,
    animate,
    animateDirection,
    animateDuration,
  ]);

  return (
    <div className="home">
      {gradient === "linear" ? (
        <>
          <div className="title-desc-and-links-wrapper">
            <LinearCodeTitle
              angle={angle}
              color1={color1}
              color2={color2}
              animate={animate}
              animateDirection={animateDirection}
              animateDuration={animateDuration}
            />
            <Description />
            <NpmGithubLinks />
          </div>
          <div className="linear-gradient-wrapper">
            <LinearCodeBlock
              highlight={highlight}
              angle={angle}
              color1={color1}
              color2={color2}
              animate={animate}
              animateDirection={animateDirection}
              animateDuration={animateDuration}
            />
            <LinearInputs
              setAngle={setAngle}
              incrementAngle={incrementAngle}
              decrementAngle={decrementAngle}
              timeoutClear={timeoutClear}
              handleSwatchClick={handleSwatchClick}
              color1={color1}
              color2={color2}
              displayColorPicker={displayColorPicker}
              selectedColor={selectedColor}
              setColorPicker={setColorPicker}
              handleSketchChange={handleSketchChange}
              handleAnimateClick={handleAnimateClick}
              animate={animate}
              animateDirection={animateDirection}
              handleDirectionChange={handleDirectionChange}
              directionOptions={directionOptions}
              setAnimateDuration={setAnimateDuration}
              incrementDuration={incrementDuration}
              decrementDuration={decrementDuration}
              refresh={refresh}
            />
            <SelectGradients gradient={gradient} setGradient={setGradient} />
          </div>
        </>
      ) : gradient === "radial" ? (
        <>
          <div className="title-desc-and-links-wrapper">
            <RadialCodeTitle
              shape={shape}
              position={position}
              color1={color1}
              color2={color2}
              animate={animate}
              animateDirection={animateDirection}
              animateDuration={animateDuration}
            />
            <Description />
            <NpmGithubLinks />
          </div>
          <div className="radial-gradient-wrapper">
            <RadialCodeBlock
              highlight={highlight}
              shape={shape}
              position={position}
              color1={color1}
              color2={color2}
              animate={animate}
              animateDirection={animateDirection}
              animateDuration={animateDuration}
            />
            <RadialInputs
              shape={shape}
              position={position}
              timeoutClear={timeoutClear}
              handleSwatchClick={handleSwatchClick}
              color1={color1}
              color2={color2}
              displayColorPicker={displayColorPicker}
              selectedColor={selectedColor}
              setColorPicker={setColorPicker}
              handleSketchChange={handleSketchChange}
              handleAnimateClick={handleAnimateClick}
              animate={animate}
              animateDirection={animateDirection}
              handleShapeChange={handleShapeChange}
              handlePositionChange={handlePositionChange}
              handleDirectionChange={handleDirectionChange}
              shapeOptions={shapeOptions}
              positionOptions={positionOptions}
              directionOptions={directionOptions}
              setAnimateDuration={setAnimateDuration}
              incrementDuration={incrementDuration}
              decrementDuration={decrementDuration}
              refresh={refresh}
            />
            <SelectGradients gradient={gradient} setGradient={setGradient} />
          </div>
        </>
      ) : (
        <>
          <div className="title-desc-and-links-wrapper">
            <ConicCodeTitle
              angle={angle}
              position={position}
              color1={color1}
              color2={color2}
              animate={animate}
              animateDirection={animateDirection}
              animateDuration={animateDuration}
            />
            <Description />
            <NpmGithubLinks />
          </div>
          <div className="conic-gradient-wrapper">
            <ConicCodeBlock
              highlight={highlight}
              angle={angle}
              position={position}
              color1={color1}
              color2={color2}
              animate={animate}
              animateDirection={animateDirection}
              animateDuration={animateDuration}
            />
            <ConicInputs
              setAngle={setAngle}
              incrementAngle={incrementAngle}
              decrementAngle={decrementAngle}
              position={position}
              timeoutClear={timeoutClear}
              handleSwatchClick={handleSwatchClick}
              color1={color1}
              color2={color2}
              displayColorPicker={displayColorPicker}
              selectedColor={selectedColor}
              setColorPicker={setColorPicker}
              handleSketchChange={handleSketchChange}
              handleAnimateClick={handleAnimateClick}
              animate={animate}
              animateDirection={animateDirection}
              handlePositionChange={handlePositionChange}
              handleDirectionChange={handleDirectionChange}
              positionOptions={positionOptions}
              directionOptions={directionOptions}
              setAnimateDuration={setAnimateDuration}
              incrementDuration={incrementDuration}
              decrementDuration={decrementDuration}
              refresh={refresh}
            />
            <SelectGradients gradient={gradient} setGradient={setGradient} />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
