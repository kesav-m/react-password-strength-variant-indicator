# React Password Strength Indicator

A password strength checker with various indicator options using [zxcvbn](https://www.npmjs.com/package/zxcvbn) library.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

react/react-dom is a peer dependency. You should be using this in a React project.

### Installing

Add password strength indicator to your project by executing

```
npm install react-password-strength-variant-indicator
```
### Usage

Here's an example of basic usage:

```js
import React, { Component } from 'react';
import StrengthCheck from "react-password-strength-variant-indicator";

class MyApp extends Component {
  state = {
    inputprops: { inputclass: "form-control", autocomplete: "off", tabIndex: 0 },
    value: ''
  }

  changeCallBackHandler = value => {
   this.setState({ value: value })
  };
  
  render() {
    return (
      <div>
        <StrengthCheck
        changecallback={val => {
          changeCallBackHandler(val);
        }}
        validscore="1"
        inputprops={this.state.inputprops}
      />
      </div>
    );
  }
}
```
## User guide

#### Props

|Prop name|Description|Default value|Example values|
|----|----|----|----|
|minLength|The minimum length of password to be typed.|5|`minLength=6`|
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
