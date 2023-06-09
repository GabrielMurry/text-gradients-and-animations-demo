import React from "react";
import { SketchPicker } from "react-color";
import Select from "react-select";
import Slider from "rc-slider";

const ConicInputs = ({
  angle,
  handleAngleChange,
  position,
  handlePositionChange,
  handleSwatchClick,
  color1,
  color2,
  displayColorPicker,
  selectedColor,
  setColorPicker,
  handleSketchChange,
  handleAnimateClick,
  animate,
  animateDirection,
  handleDirectionChange,
  positionOptions,
  directionOptions,
  animateDuration,
  handleAnimateDurationChange,
  refresh,
}) => {
  return (
    <div className="input-wrapper">
      <div className="inc-and-dec-wrapper">
        <div className="angle-title-input">
          <span>Angle</span>
        </div>
        <div className="inc-and-dec">
          <div className="slider">
            <Slider
              min={0}
              max={360}
              defaultValue={angle}
              onChange={(val) => handleAngleChange(val)}
            />
          </div>
        </div>
      </div>
      <div className="inc-and-dec-wrapper">
        <div className="angle-title-input">
          <span>Position</span>
        </div>
        <div className="animateDirection-select-wrapper">
          <Select
            placeholder={position.charAt(0).toUpperCase() + position.slice(1)}
            isSearchable={false}
            onChange={(e) => handlePositionChange(e)}
            options={positionOptions}
            className="animateDirection-select"
          />
        </div>
      </div>
      <div className="swatch-wrapper">
        <div className="swatch-title-input">
          <span>Colors</span>
        </div>
        <div className="swatch-both">
          <div className="swatch" onClick={(e) => handleSwatchClick("color1")}>
            <div
              className="color"
              style={{
                background: `${
                  JSON.parse(localStorage.getItem("storedColor1"))
                    ? JSON.parse(localStorage.getItem("storedColor1"))
                    : color1
                }`,
              }}
            />
          </div>
          <div className="swatch" onClick={() => handleSwatchClick("color2")}>
            <div
              className="color"
              style={{
                background: `${
                  JSON.parse(localStorage.getItem("storedColor2"))
                    ? JSON.parse(localStorage.getItem("storedColor2"))
                    : color2
                }`,
              }}
            />
          </div>
        </div>
      </div>
      {displayColorPicker ? (
        <div className="color-picker-popover">
          <div
            className="color-picker-cover"
            onClick={() => setColorPicker(false)}
          />
          <SketchPicker
            color={selectedColor === "color1" ? color1 : color2}
            onChange={handleSketchChange}
            className="sketchPicker"
          />
        </div>
      ) : null}
      <div className="animate-wrapper">
        <div className="animate-title-input">
          <span>Animate</span>
        </div>
        <div className="animate-true-and-false">
          <div
            onClick={() => handleAnimateClick(true)}
            className="animate-true"
            style={
              animate
                ? { backgroundColor: "rgb(30,144,255)", color: "white" }
                : { backgroundColor: "#e4e4e4" }
            }
          >
            True
          </div>
          <div
            onClick={() => handleAnimateClick(false)}
            className="animate-false"
            style={
              animate
                ? { backgroundColor: "#e4e4e4" }
                : { backgroundColor: "rgb(30,144,255)", color: "white" }
            }
          >
            False
          </div>
        </div>
      </div>
      <div className="animateDirection-wrapper">
        <div className="animateDirection-title-input">
          <span>Animate Direction</span>
        </div>
        <div className="animateDirection-select-wrapper">
          <Select
            placeholder={
              animateDirection.charAt(0).toUpperCase() +
              animateDirection.slice(1)
            }
            isSearchable={false}
            onChange={(e) => handleDirectionChange(e)}
            options={directionOptions}
            className="animateDirection-select"
          />
        </div>
      </div>
      <div className="animateDuration-wrapper">
        <div className="inc-and-dec-wrapper">
          <div className="animateDuration-title-input">
            <span>Animate Duration</span>
          </div>
          <div className="inc-and-dec">
            <div className="slider">
              <Slider
                min={1}
                max={30}
                defaultValue={animateDuration}
                onChange={(val) => handleAnimateDurationChange(val)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="apply-changes-wrapper">
        <div className="apply-changes-title" />
        <div className="apply-changes-mini-wrapper">
          <button onClick={refresh} className="apply-changes-button">
            Apply Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConicInputs;
