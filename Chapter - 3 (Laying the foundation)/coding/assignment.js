import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.png";
import userIcon from "./usericon.png"
import "./Assignment.css";
// ======Using react.createElement======
// const parent = React.createElement("div", { className: "Title" }, [
//   React.createElement("h1", {}, "This is h1 tag"),
//   React.createElement("h2", {}, "This is h2 tag"),
//   React.createElement("h3", {}, "This is h3 tag"),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ======Using JSX======
// const parent = (
//   <div>
//     <h1>This is H1 tag</h1>
//     <h2>This is H2 tag</h2>
//     <h3>This is H3 tag</h3>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ======Using functional component======
// const Parent = () => {
//     return (
//         <div>
//             <h1>This is h1 tag</h1>
//             <h2>This is h2 tag</h2>
//             <h3>This is h3 tag</h3>
//         </div>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Parent />);
// root.render(Parent());

// ======Pass attributes into the tags in JSX======
// const Parent = () => {
//   return (
//     <div>
//       <h1 style={{color:"blue"}}>This is h1 tag</h1>
//       <h2 style={{color:"red"}}>This is h2 tag</h2>
//       <h3 style={{color:"green"}}>This is h3 tag</h3>
//     </div>
//   );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Parent());

// ======Component composition======
// const Parent = () => {
//   return (
//     <div>
//       <h1 style={{color:"blue"}}>This is h1 tag</h1>
//       <h2 style={{color:"red"}}>This is h2 tag</h2>
//       <h3 style={{color:"green"}}>This is h3 tag</h3>
//     </div>
//   );
// };
// const TitleComponent = () => {
//     return (
//         <div className="container">
//             <h1>Title</h1>
//             <Parent />
//         </div>
//     );
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TitleComponent />)

// ======`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.======
// const element = <h1>This is a React element</h1>;
// const TitleComponent = () => {
//   return (
//     <div className="container">
//       <h1>Title</h1>
//     </div>
//   );
// };
// const Parent = () => {
//   return (
//     <div className="container">
//       {element}
//       <TitleComponent />
//       <TitleComponent></TitleComponent>
//     </div>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Parent />);

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={logo}></img>
      </div>
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="Search anything you want..."
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <div className="right">
        <img src={userIcon} alt="User Icon" />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
