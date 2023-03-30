import React from "react";

const RadialCodeBlock = ({
  highlight,
  shape,
  position,
  color1,
  color2,
  animate,
  animateDirection,
  animateDuration,
}) => {
  return (
    <div className="code-block-wrapper">
      <div className="code-block-inner-wrapper">
        <div className="code-block">
          <div>
            <span className="code-block-gray">{`<`}</span>
            <span className="code-block-green">{`RadialTextGradient`}</span>
          </div>
          <div className="code-block-properties">
            <div>
              <span className="code-block-lightblue">{`shape`}</span>
              <span className="code-block-white">{`=`}</span>
              <span className="code-block-blue">{`{`}</span>
              <span
                style={
                  highlight.shape
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span> {`"`}</span>
                <span>{`${shape}`}</span>
                <span>{`"`} </span>
              </span>
              <span className="code-block-blue">{`}`}</span>
            </div>
            <div>
              <span className="code-block-lightblue">{`position`}</span>
              <span className="code-block-white">{`=`}</span>
              <span className="code-block-blue">{`{`}</span>
              <span
                style={
                  highlight.position
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span> {`"`}</span>
                <span>{`${position}`}</span>
                <span>{`"`} </span>
              </span>
              <span className="code-block-blue">{`}`}</span>
            </div>
            <div>
              <span className="code-block-lightblue">{`colors`}</span>
              <span className="code-block-white">{`=`}</span>
              <span className="code-block-blue">{`{`}</span>
              <span className="code-block-yellow">{`[`}</span>
              <span
                style={
                  highlight.color1
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span> {`"`}</span>
                <span>{color1}</span>
                <span>{`"`} </span>
              </span>
              <span>{`,`}</span>
              <span
                style={
                  highlight.color2
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span> {`"`}</span>
                <span>{color2}</span>
                <span>{`"`} </span>
              </span>
              <span className="code-block-yellow">{`]`}</span>
              <span className="code-block-blue">{`}`}</span>
            </div>
            <div>
              <span className="code-block-lightblue">{`animate`}</span>
              <span className="code-block-white">{`=`}</span>
              <span
                style={
                  highlight.animate
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span className="code-block-blue">{`{`}</span>
                <span> {`${animate}`} </span>
                <span className="code-block-blue">{`}`}</span>
              </span>
            </div>
            <div>
              <span className="code-block-lightblue">{`animateDirection`}</span>
              <span className="code-block-white">{`=`}</span>
              <span className="code-block-blue">{`{`}</span>
              <span
                style={
                  highlight.animateDirection
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span> {`"`}</span>
                <span>{`${animateDirection}`}</span>
                <span>{`"`} </span>
              </span>
              <span className="code-block-blue">{`}`}</span>
            </div>
            <div>
              <span className="code-block-lightblue">{`animateDuration`}</span>
              <span className="code-block-white">{`=`}</span>
              <span
                style={
                  highlight.animateDuration
                    ? {
                        backgroundColor: "yellow",
                        borderRadius: "2px",
                        color: "black",
                      }
                    : null
                }
              >
                <span className="code-block-blue">{`{`}</span>
                <span> {`${animateDuration}`} </span>
                <span className="code-block-blue">{`}`}</span>
              </span>
            </div>
          </div>
          <span className="code-block-gray">{`>`}</span>
          <div className="code-block-title">
            <span>Text Gradients and Animations in React.</span>
          </div>
          <div>
            <span className="code-block-gray">{`</`}</span>
            <span className="code-block-green">{`RadialTextGradient`}</span>
            <span className="code-block-gray">{`>`}</span>
          </div>
        </div>
        <div className="preview-gradient-wrapper">
          <div
            style={{
              background: `radial-gradient(${shape} at ${position}, ${color1}, ${color2})`,
              backgroundSize: `${animate ? "400% 400%" : ""}`,
              animation: `${
                animate
                  ? `gradient-animate-${animateDirection} ${animateDuration}s ease infinite`
                  : ""
              }`,
            }}
            className="preview-gradient"
          />
          <div className="preview-gradient-title">
            <span>Preview</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialCodeBlock;
