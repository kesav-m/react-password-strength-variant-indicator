import React, { Component } from "react";
import StrengthBar from "./StrengthBar";
import "./index.css";
import zxcvbn from "zxcvbn";

class StrengthCheck extends Component {
  state = {
    isValid: false,
    pwdValue: "",
    minLength: 5,
    validscore: 2,
    status: "",
    score: "",
    strength: {
      0: "Worst",
      1: "Bad",
      2: "Weak",
      3: "Good",
      4: "Strong"
    },
    variant: "linear-stripped"
  };
  componentDidMount = () => {
    const { strength, minLength, validscore, variant } = this.props;
    if (strength) {
      this.setState({ strength: strength });
    }
    if (minLength) {
      this.setState({ minLength: minLength });
    }

    if (validscore) {
      this.setState({ validscore: validscore });
    }
    if (variant) {
      this.setState({ variant: variant });
    }
  };

  componentDidUpdate = prevProps => {
    if (this.props.strength && this.props.strength !== prevProps.strength) {
      this.setState({ strength: this.props.strength });
    }
    if (this.props.variant && this.props.variant !== prevProps.variant) {
      this.setState({ variant: this.props.variant });
    }
  };

  onChangeHandler = e => {
    const { minLength, validscore, isValid } = this.state;
    const typedValue = e.target.value;
    const { score } = zxcvbn(typedValue);
    this.setState({ score: score });
    if (typedValue.length > minLength && score >= validscore) {
      this.setState({ isValid: true });
    }
    this.setState({ pwdValue: typedValue });
    this.props.changecallback({
      value: typedValue,
      isValid: isValid,
      score: score
    });
  };
  render() {
    const inputClass = ["strength"];
    const mainClass = ["pwd-container"];
    const { className, inputprops } = this.props;
    const { score, variant, strength, pwdValue } = this.state;

    const { inputclass, ...input } = inputprops || '';

    if (inputprops && inputprops.inputclass) {
      inputClass.push(inputprops.inputclass);
    }
    if (variant === "line") {
      mainClass.push("mb0");
    }
    if (className) {
      mainClass.push(className);
    }
    return (
      <>
        <label>{this.props.labeltext}</label>
        <div className={mainClass.join(" ")}>
          <input
            className={inputClass.join(" ")}
            type="password"
            onChange={e => this.onChangeHandler(e)}
            {...input}
          />
          {pwdValue && (
            <>
              <span className={`strength-text strength-text--${score}`}>
                {strength[score]}
              </span>
            </>
          )}
        </div>
        {pwdValue && (
          <>
            <StrengthBar score={score} variant={variant} />
          </>
        )}
      </>
    );
  }
}

export default StrengthCheck;
