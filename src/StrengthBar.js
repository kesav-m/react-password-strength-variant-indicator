import React from "react";
import "./StrengthBar.css";

const StrengthBar = ({ score, variant }) => {
  const info = { 0: "", 1: "", 2: "", 3: "", 4: "" };
  for (let i = 0; i <= score; i++) {
    info[i] = i;
  }
  return (
    <>
      {variant === "line" && <div className={`line line-strength--${score}`} />}
      {variant === "linear" && (
        <div className={`primary-strength primary-strength--${score}`} />
      )}
      {variant === "linear-stripped" && (
        <div
          className={`primary-strength__stripped primary-strength__stripped--${score}`}
        />
      )}
      {variant === "discontinuous" && (
        <div className="strength__container">
          {Object.keys(info).map((key, idx) => {
            if (info[key] !== "") {
              return (
                <div
                  className={`strength__blocks strength__blocks--${key}`}
                  key={idx}
                />
              );
            } else {
              return <div className={`strength__blocks`} key={idx} />;
            }
          })}
        </div>
      )}

      {variant === "discontinuous-stripped" && (
        <div className="strength__container">
          {Object.keys(info).map((key, idx) => {
            if (info[key] !== "") {
              return (
                <div
                  className={`strength__blocks strength__blocks__stripped--${key}`}
                  key={idx}
                />
              );
            } else {
              return <div className={`strength__blocks`} key={idx} />;
            }
          })}
        </div>
      )}
      {variant === "circle" && (
        <div className="strength-circle__container">
          {Object.keys(info).map((key, idx) => {
            if (info[key] !== "") {
              return (
                <div
                  className={`strength__circle strength__circle--${key}`}
                  key={idx}
                />
              );
            } else {
              return <div className={`strength__circle`} key={idx} />;
            }
          })}
        </div>
      )}
    </>
  );
};

export default StrengthBar;
