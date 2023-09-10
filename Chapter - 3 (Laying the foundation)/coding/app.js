import React from "react";
import ReactDOM from "react-dom";

// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxheading = <h1 id="heading">React using jsx</h1> ===== React Element

const Title = () => {
  return <h1>title</h1>;
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <div>Hello react</div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
